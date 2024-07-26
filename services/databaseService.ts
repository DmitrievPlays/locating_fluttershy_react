import { open, ANDROID_EXTERNAL_FILES_PATH, DB } from "@op-engineering/op-sqlite";

export default class DatabaseService {
  private static serviceInstance: DatabaseService;
  public db: DB = this.prepareDB();

  static getInstance() {
    return this.serviceInstance || (this.serviceInstance = new this());
  }

  execute(query: string) {
    try {
      this.db.execute(query);
    } catch (error: any) {
      console.log(error.toString().split(" at ")[0]);
    }
  }

  prepareDB(): DB {
    try {
      this.db = open({
        name: "routes.sqlite",
        location: `${ANDROID_EXTERNAL_FILES_PATH}/../../../../Routes/`,
      });
      this.db.execute(
        "CREATE TABLE ROUTES (id integer, distance real, speed_avg real, date_start integer, date_finish integer)"
      );
      console.log("Opening newly created database");
      return this.db;
    } catch (error) {
      console.log("Opening already existing database");
    }
    return this.db;
  }
}
