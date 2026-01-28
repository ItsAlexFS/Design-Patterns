// Mediator
class Mediator {
  notify(message) {
    console.log(message);
  }
}

class User {
  constructor(mediator) {
    this.mediator = mediator;
  }
  send() {
    this.mediator.notify("Mensaje enviado");
  }
}

new User(new Mediator()).send();
