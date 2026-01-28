class Car {
  constructor() { 
    this.parts = []; 
  }

  add(part) { 
    this.parts.push(part); 
  }

  show() { 
    return this.parts.join(", "); 
  }
}

class CarBuilder {
  constructor() { 
    this.car = new Car(); 
  }

  addEngine() {
    this.car.add("Motor");
    return this;
  }

  addWheels() {
    this.car.add("Ruedas");
    return this;
  }

  build() { 
    return this.car; 
  }
}

const car = new CarBuilder().addEngine().addWheels().build();
console.log(car.show());