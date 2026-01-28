# --- Subsistemas Complejos ---
class CPU:
    def congelar(self): print("CPU congelado")
    def ejecutar(self): print("CPU ejecutando instrucciones")

class Memoria:
    def cargar(self): print("Cargando datos en RAM")

class DiscoDuro:
    def leer(self): print("Leyendo sector de arranque")

# --- Facade ---
class ComputadoraFacade:
    def __init__(self):
        self.cpu = CPU()
        self.memoria = Memoria()
        self.disco = DiscoDuro()

    def encender_pc(self):
        print("--- Iniciando PC ---")
        self.cpu.congelar()
        self.memoria.cargar()
        self.disco.leer()
        self.cpu.ejecutar()

# Uso
mi_pc = ComputadoraFacade()
mi_pc.encender_pc()