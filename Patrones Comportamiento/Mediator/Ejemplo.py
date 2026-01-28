# Mediator
class Mediator:
    def notify(self, message):
        print(message)

class User:
    def __init__(self, mediator):
        self.mediator = mediator

    def send(self):
        self.mediator.notify("Mensaje enviado")

User(Mediator()).send()
