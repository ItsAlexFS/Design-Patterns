# Strategy
class Strategy:
    def execute(self, a, b): pass

class Multiply(Strategy):
    def execute(self, a, b):
        return a * b

class Context:
    def __init__(self, strategy):
        self.strategy = strategy

    def run(self, a, b):
        return self.strategy.execute(a, b)

print(Context(Multiply()).run(3, 4))
