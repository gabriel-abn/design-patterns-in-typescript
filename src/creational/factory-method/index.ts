/**
 * Represents a car.
 */
class Vehicle {
  private model: string;
  private year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }

  startEngine(): void {
    console.log(`Starting ${this.model} engine...`);
  }

  showInfo(): void {
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

/**
 * Represents a factory that creates cars.
 */
interface VehicleFactory {
  createVehicle(model: string, year: number): Vehicle;
}

/**
 * A factory that creates sports cars.
 */
class SportsCarFactory implements VehicleFactory {
  createVehicle(model: string, year: number): Vehicle {
    return new Vehicle(model, year);
  }
}

/**
 * A factory that creates family cars.
 */
class FamilyCarFactory implements VehicleFactory {
  createVehicle(model: string, year: number): Vehicle {
    return new Vehicle(model, year);
  }
}

/**
 * A client that uses the car factories to create cars.
 */
class VehicleClient {
  private carFactory: VehicleFactory;

  constructor(carFactory: VehicleFactory) {
    this.carFactory = carFactory;
  }

  createVehicle(model: string, year: number): Vehicle {
    return this.carFactory.createVehicle(model, year);
  }
}

// Usage example:
const sportsCarFactory = new SportsCarFactory();
const familyCarFactory = new FamilyCarFactory();

const vehicleClient1 = new VehicleClient(sportsCarFactory);
const car1 = vehicleClient1.createVehicle("Ferrari", 2022);
car1.startEngine(); // Starting Ferrari engine... Vroom Vroom!

const vehicleClient2 = new VehicleClient(familyCarFactory);
const car2 = vehicleClient2.createVehicle("Toyota", 2022);
car2.startEngine(); // Starting Toyota engine...
