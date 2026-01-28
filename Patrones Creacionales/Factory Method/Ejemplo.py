class Product:
    def operation(self): pass

class ConcreteProductA(Product):
    def operation(self):
        return "Producto A"

class ConcreteProductB(Product):
    def operation(self):
        return "Producto B"

class Creator:
    def factory_method(self): pass
    def create(self):
        return self.factory_method().operation()

class CreatorA(Creator):
    def factory_method(self):
        return ConcreteProductA()

print(CreatorA().create())
