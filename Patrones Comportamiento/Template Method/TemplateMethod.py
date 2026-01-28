# Template Method
class Process:
    def run(self):
        self.step1()
        self.step2()

class ConcreteProcess(Process):
    def step1(self):
        print("Paso 1")
    def step2(self):
        print("Paso 2")

ConcreteProcess().run()
