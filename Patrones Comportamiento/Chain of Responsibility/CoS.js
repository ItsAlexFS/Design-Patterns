// Chain of Responsibility
class Handler {
  setNext(handler) {
    this.next = handler;
    return handler;
  }
  handle() {
    if (this.next) this.next.handle();
  }
}

class A extends Handler {
  handle() {
    console.log("Manejado por A");
    super.handle();
  }
}

new A().handle();
