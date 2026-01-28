# Memento
class Memento:
    def __init__(self, state):
        self.state = state

class Originator:
    def set_state(self, state):
        self.state = state

    def save(self):
        return Memento(self.state)

o = Originator()
o.set_state("Estado A")
m = o.save()
