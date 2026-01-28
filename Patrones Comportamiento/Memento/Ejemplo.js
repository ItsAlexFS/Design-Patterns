// Memento
class Memento {
  constructor(state) {
    this.state = state;
  }
}

class Originator {
  setState(state) {
    this.state = state;
  }
  save() {
    return new Memento(this.state);
  }
}

const o = new Originator();
o.setState("Estado A");
const m = o.save();
