// Template Method
class Process {
  run() {
    this.step1();
    this.step2();
  }
}

class ConcreteProcess extends Process {
  step1() {
    console.log("Paso 1");
  }
  step2() {
    console.log("Paso 2");
  }
}

new ConcreteProcess().run();
