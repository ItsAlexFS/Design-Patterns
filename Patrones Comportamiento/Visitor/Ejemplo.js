// Visitor
class Element {
  accept(visitor) {
    visitor.visit(this);
  }
}

class Visitor {
  visit(element) {
    console.log("Elemento visitado");
  }
}

new Element().accept(new Visitor());
