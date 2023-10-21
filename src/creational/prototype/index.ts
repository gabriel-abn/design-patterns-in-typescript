/**
 * @interface Prototype
 * Defines the interface for cloning itself.
 */
interface Prototype {
  clone(): Prototype;
}

/**
 * @class Person
 * Defines a person with a name and age.
 * Implements the Prototype interface to allow cloning.
 */
class Person implements Prototype {
  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): Person {
    return new Person(this.name, this.age);
  }
}

/**
 * @class Employee
 * Defines an employee with a job title and salary.
 * Extends the Person class and implements the Prototype interface to allow cloning.
 */
class Employee extends Person implements Prototype {
  constructor(
    name: string,
    age: number,
    public jobTitle: string,
    public salary: number,
  ) {
    super(name, age);
  }

  /**
   * @method clone
   * Clones the current Employee object.
   */
  clone(): Employee {
    return new Employee(this.name, this.age, this.jobTitle, this.salary);
  }
}

/**
 * @function main
 * Creates a new Employee object and clones it to create a new Employee object with the same properties.
 */
function main() {
  const employee1 = new Employee("John", 30, "Software Engineer", 100000);
  const employee2 = employee1.clone();

  console.log(employee1);
  console.log(employee2);
}

main();
