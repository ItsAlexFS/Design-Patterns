# Observer
class Subject:
    def __init__(self):
        self.observers = []

    def attach(self, o):
        self.observers.append(o)

    def notify(self):
        for o in self.observers:
            o.update()

class Observer:
    def update(self):
        print("Observador notificado")

s = Subject()
s.attach(Observer())
s.notify()
