# Chain of Responsibility
class Handler:
    def __init__(self, next=None):
        self.next = next

    def handle(self):
        if self.next:
            self.next.handle()

class A(Handler):
    def handle(self):
        print("Manejado por A")
        super().handle()

A().handle()
