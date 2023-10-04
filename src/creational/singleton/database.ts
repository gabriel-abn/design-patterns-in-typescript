/* 
  A class that will have to handle the connection to the database 
  should not be instantiated more than once. Most of the SQL drivers
  are not designed to be used in a multi-threaded environment, so 
  creating multiple instances of the same class can lead to issues 
  such as race conditions and data inconsistencies.
*/

export class Database {
  // Create a private static instance of the same class
  private static instance: Database;

  // Its constructor must be private, so it can't be instantiated from outside
  private constructor() {}

  // Create a public static method to get the instance of the class:
  // if the instance doesn't exist, create it, otherwise return the existing one
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}
