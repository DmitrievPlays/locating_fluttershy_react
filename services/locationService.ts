import Geolocation from "@react-native-community/geolocation";
import BackgroundService from "react-native-background-actions";
import eventEmitter from "../src/events";
import { Double } from "react-native/Libraries/Types/CodegenTypes";

export default class LocationService {
    private static serviceInstance: LocationService;

    static getInstance() {
        return this.serviceInstance || (this.serviceInstance = new this());
    }

    options = {
        taskName: "LocationService",
        taskTitle: "LocationService",
        taskDesc: "Background calculations",
        taskIcon: {
            name: "ic_launcher",
            type: "mipmap",
        },
        color: "#ff00ff",
        link: "app_main",
        parameters: {
            delay: 1000,
        },
    };

    distance = 0;
    speed = 0;
    speedAvg = 1;
    dateStart = 0;

    prevLat = 0;
    prevLon = 0;
    watchId = 0;

    veryIntensiveTask = async () => {
        let distanceTemp = 0;
        let speedCheckCount = 0;
        let speedCheckResult = 0;
        this.dateStart = new Date().getTime();

        await new Promise(async () => {
            this.watchId = Geolocation.watchPosition(
                (info) => {
                    if (info == null) return;
                    if (this.prevLat == 0 || this.prevLon == 0) {
                        this.prevLat = info.coords.latitude;
                        this.prevLon = info.coords.longitude;
                    }

                    this.speed = info.coords.speed || 0 * 3.6;
                    distanceTemp = this.calcDistance(
                        info.coords.latitude,
                        info.coords.longitude,
                        this.prevLat,
                        this.prevLon
                    );

                    if (distanceTemp > 20) {
                        this.distance += distanceTemp;
                        this.prevLat = info.coords.latitude;
                        this.prevLon = info.coords.longitude;
                    }
                    distanceTemp = 0;
                    speedCheckCount += 1;

                    this.speedAvg =
                        (speedCheckResult + (info.coords.speed ?? 0) * 3.6) /
                        speedCheckCount;
                    speedCheckResult += (info.coords.speed ?? 0) * 3.6;

                    eventEmitter.emit("locationUpdateEvent", {
                        speed: this.speed * 3.6,
                        distance: this.distance,
                    });
                },
                () => {},
                { timeout: 1000, enableHighAccuracy: true, distanceFilter: 0 }
            );
        });
    };

    calcDistance(lat1: Double, lon1: Double, lat2: Double, lon2: Double) {
        const r = 6371;
        const p = Math.PI / 180;

        const a =
            0.5 -
            Math.cos((lat2 - lat1) * p) / 2 +
            (Math.cos(lat1 * p) *
                Math.cos(lat2 * p) *
                (1 - Math.cos((lon2 - lon1) * p))) /
                2;

        return 2 * r * Math.asin(Math.sqrt(a)) * 1000;
    }

    getServiceStatus() {
        return BackgroundService.isRunning();
    }

    async toggleService() {
        if (BackgroundService.isRunning()) {
            Geolocation.clearWatch(this.watchId);
            this.watchId = 0;
            eventEmitter.emit("locationServiceStopEvent");
            this.speed = 0;
            this.distance = 0;
            this.dateStart = 0;
            await BackgroundService.stop();
        } else {
            Geolocation.setRNConfiguration({
                skipPermissionRequests: false,
                authorizationLevel: "always",
                enableBackgroundLocationUpdates: true,
                locationProvider: "auto",
            });

            await BackgroundService.start(this.veryIntensiveTask, this.options);
            await BackgroundService.updateNotification({
                taskDesc: "Background calculations",
            });
        }

        return BackgroundService.isRunning();
    }
}
