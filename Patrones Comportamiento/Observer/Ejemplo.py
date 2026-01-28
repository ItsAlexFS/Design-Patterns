class Subject:
    def __init__(self):
        self.obs = []
    def attach(self, o):
        self.obs.append(o)
    def notify(self):
        for o in self.obs:
            o.update()

class Observer:
    def update(self):
        print("Notificado")

s = Subject()
s.attach(Observer())
s.notify()
