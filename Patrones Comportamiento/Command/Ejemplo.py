# Command
class Command:
    def execute(self): pass

class PrintCommand(Command):
    def execute(self):
        print("Ejecutando comando")

class Invoker:
    def run(self, cmd):
        cmd.execute()

Invoker().run(PrintCommand())
