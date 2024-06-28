export class Database {
  public connect() {
  }
}

export class MySQLDatabase extends Database {
  public connect() {
    // Specific MySQL Code.
  }
}

export class SQLiteDatabase extends Database {
  public connect() {
    // Specific SQLite Code.
  }
}

