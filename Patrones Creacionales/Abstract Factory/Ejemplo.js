class Button {
  render() {}
}

class WindowsButton extends Button {
  render() { 
    return "Boton Windows"; 
  }
}

class MacButton extends Button {
  render() { 
    return "Boton Mac"; 
  }
}

class GUIFactory {
  createButton() {}
}

class WindowsFactory extends GUIFactory {
  createButton() { 
    return new WindowsButton(); 
  }
}

class MacFactory extends GUIFactory {
  createButton() { 
    return new MacButton(); 
  }
}

const factory = new WindowsFactory();
console.log(factory.createButton().render());
