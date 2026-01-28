class Product {
  operation() {}
}

class ConcreteProductA extends Product {
  operation() { 
    return "Producto A"; 
  }
}

class Creator {
  factoryMethod() {}
  create() { 
    return this.factoryMethod().operation(); 
  }
}

class CreatorA extends Creator {
  factoryMethod() { 
    return new ConcreteProductA(); 
  }
}

console.log(new CreatorA().create());
