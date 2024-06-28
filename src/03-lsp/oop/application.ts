import { Database, MySQLDatabase } from "./database";

class Application {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  public start() {
    this.database.connect();
  }
}

const database = new MySQLDatabase();
const application = new Application(database);
application.start();
