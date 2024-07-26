import DatabaseService from "./databaseService";
import eventEmitter from "../src/events";
import { locationService } from "../App";

export default class RoutesSaverService {
    private static serviceInstance: RoutesSaverService;
    private service = DatabaseService.getInstance();

    static getInstance() {
        return this.serviceInstance || (this.serviceInstance = new this());
    }

    init() {
        if (eventEmitter.listenerCount("locationServiceStopEvent") == 0) {
            eventEmitter.addListener("locationServiceStopEvent", () => {
                this.saveRoute();
            });
        }
    }

    saveRoute() {
        this.service.db.execute(`INSERT INTO ROUTES VALUES (?,?,?,?,?)`, [
            new Date().getTime(),
            locationService.distance.toFixed(2),
            locationService.speedAvg.toFixed(1),
            locationService.dateStart,
            new Date().getTime(),
        ]);
    }
}
