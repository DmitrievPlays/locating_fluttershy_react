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
    this.service.db.execute(`INSERT INTO ROUTES VALUES (?,?,?,1,1)`, [
      new Date().getTime(),
      locationService.distance,
      locationService.speed,
    ]);
  }
}
