/**
 * Represents a car object.
 */
class Car {
  private model: string;
  private year: number;
  private color: string;
  private engine: string;
  private transmission: string;

  constructor(
    model: string,
    year: number,
    color: string,
    engine: string,
    transmission: string,
  ) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.engine = engine;
    this.transmission = transmission;
  }

  toString(): string {
    return `${this.color} ${this.year} ${this.model} with a ${this.engine} engine and ${this.transmission} transmission`;
  }
}

/**
 * Represents a builder for creating car objects.
 *
 * In every method, we return the CarBuilder instance so that we can chain the methods.
 */
class CarBuilder {
  private model: string;
  private year: number;
  private color: string;
  private engine: string;
  private transmission: string;

  constructor() {
    this.model = "";
    this.year = 0;
    this.color = "";
    this.engine = "";
    this.transmission = "";
  }

  setModel(model: string): CarBuilder {
    this.model = model;
    return this;
  }

  setYear(year: number): CarBuilder {
    this.year = year;
    return this;
  }

  setColor(color: string): CarBuilder {
    this.color = color;
    return this;
  }

  setEngine(engine: string): CarBuilder {
    this.engine = engine;
    return this;
  }

  setTransmission(transmission: string): CarBuilder {
    this.transmission = transmission;
    return this;
  }

  build(): Car {
    return new Car(
      this.model,
      this.year,
      this.color,
      this.engine,
      this.transmission,
    );
  }
}

// Example usage:
const carBuilder = new CarBuilder();
const car = carBuilder
  .setModel("Mustang")
  .setYear(2022)
  .setColor("Red")
  .setEngine("V8")
  .setTransmission("Automatic")
  .build();
console.log(car.toString()); // Output: Red 2022 Mustang with a V8 engine and Automatic transmission
