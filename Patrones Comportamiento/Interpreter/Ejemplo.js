// Interpreter
class NumberExpression {
  constructor(value) {
    this.value = value;
  }
  interpret() {
    return this.value;
  }
}

console.log(new NumberExpression(10).interpret());
