class Button:
    def render(self): pass

class WindowsButton(Button):
    def render(self):
        return "Boton Windows"

class MacButton(Button):
    def render(self):
        return "Boton Mac"

class GUIFactory:
    def create_button(self): pass

class WindowsFactory(GUIFactory):
    def create_button(self):
        return WindowsButton()

class MacFactory(GUIFactory):
    def create_button(self):
        return MacButton()

factory = WindowsFactory()
print(factory.create_button().render())
