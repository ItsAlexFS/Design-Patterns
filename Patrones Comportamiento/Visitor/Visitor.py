# Visitor
class Element:
    def accept(self, visitor):
        visitor.visit(self)

class Visitor:
    def visit(self, element):
        print("Elemento visitado")

Element().accept(Visitor())
