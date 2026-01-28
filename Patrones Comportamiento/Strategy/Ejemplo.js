// Strategy
class Strategy {
  execute(a, b) {}
}

class Multiply extends Strategy {
  execute(a, b) {
    return a * b;
  }
}

class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }
  run(a, b) {
    return this.strategy.execute(a, b);
  }
}

console.log(new Context(new Multiply()).run(3, 4));
