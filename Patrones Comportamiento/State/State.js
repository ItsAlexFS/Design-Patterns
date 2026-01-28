// State
class State {
  handle() {}
}

class Active extends State {
  handle() {
    console.log("Estado activo");
  }
}

class Context {
  setState(state) {
    this.state = state;
  }
  request() {
    this.state.handle();
  }
}

const c = new Context();
c.setState(new Active());
c.request();
