class Car:
    def __init__(self):
        self.parts = []

    def add(self, part):
        self.parts.append(part)

    def show(self):
        return ", ".join(self.parts)

class CarBuilder:
    def __init__(self):
        self.car = Car()

    def add_engine(self):
        self.car.add("Motor")
        return self

    def add_wheels(self):
        self.car.add("Ruedas")
        return self

    def build(self):
        return self.car

car = CarBuilder().add_engine().add_wheels().build()
print(car.show())
