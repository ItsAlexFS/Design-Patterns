# State
class State:
    def handle(self): pass

class Active(State):
    def handle(self):
        print("Estado activo")

class Context:
    def set_state(self, state):
        self.state = state

    def request(self):
        self.state.handle()

c = Context()
c.set_state(Active())
c.request()
