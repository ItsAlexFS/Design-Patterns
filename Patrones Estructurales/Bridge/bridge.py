from abc import ABC, abstractmethod

# 1. Implementor (Interfaz)
class Dispositivo(ABC):
    @abstractmethod
    def encender(self): pass
    @abstractmethod
    def set_volumen(self, percent): pass

# 2. Concrete Implementors
class TV(Dispositivo):
    def encender(self):
        print("TV encendida")
    def set_volumen(self, percent):
        print(f"TV volumen al {percent}%")

class Radio(Dispositivo):
    def encender(self):
        print("Radio encendida")
    def set_volumen(self, percent):
        print(f"Radio volumen al {percent}%")

# 3. Abstraction
class ControlRemoto:
    def __init__(self, dispositivo: Dispositivo):
        self.dispositivo = dispositivo # EL PUENTE

    def toggle_power(self):
        print("Presionando botón Power...")
        self.dispositivo.encender()

# 4. Refined Abstraction
class ControlAvanzado(ControlRemoto):
    def mute(self):
        print("Presionando botón Mute...")
        self.dispositivo.set_volumen(0)

# Uso
mi_radio = Radio()
control = ControlAvanzado(mi_radio)

control.toggle_power()
control.mute()