class Strategy:
    def execute(self, a, b): pass

class Add(Strategy):
    def execute(self, a, b):
        return a + b

class Context:
    def __init__(self, strategy):
        self.strategy = strategy
    def run(self, a, b):
        return self.strategy.execute(a, b)

print(Context(Add()).run(2, 3))
