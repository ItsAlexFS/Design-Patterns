// Observer
class Subject {
  constructor() {
    this.observers = [];
  }
  attach(o) {
    this.observers.push(o);
  }
  notify() {
    this.observers.forEach(o => o.update());
  }
}

class Observer {
  update() {
    console.log("Observador notificado");
  }
}

const s = new Subject();
s.attach(new Observer());
s.notify();
