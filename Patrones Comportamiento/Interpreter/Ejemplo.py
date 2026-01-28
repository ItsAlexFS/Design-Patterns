# Interpreter
class NumberExpression:
    def __init__(self, value):
        self.value = value

    def interpret(self):
        return self.value

print(NumberExpression(10).interpret())
