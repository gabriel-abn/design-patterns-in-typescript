import { Database } from "./database";

// Create two instances of the Database class
const db1 = Database.getInstance();
const db2 = Database.getInstance();

// Check if both instances are the same
console.log(db1 === db2); // true
