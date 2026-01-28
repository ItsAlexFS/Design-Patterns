# 1. Flyweight (Estado compartido)
class TipoArbol:
    def __init__(self, nombre, color):
        self.nombre = nombre
        self.color = color

    def dibujar(self, x, y):
        print(f"Dibujando {self.nombre} ({self.color}) en [{x}, {y}]")

# 2. Flyweight Factory
class FabricaArboles:
    _tipos = {}

    @staticmethod
    def obtener_tipo(nombre, color):
        key = (nombre, color)
        if key not in FabricaArboles._tipos:
            print(f"(Creando nuevo objeto compartido: {nombre})")
            FabricaArboles._tipos[key] = TipoArbol(nombre, color)
        return FabricaArboles._tipos[key]

# 3. Context
class Arbol:
    def __init__(self, x, y, tipo):
        self.x = x
        self.y = y
        self.tipo = tipo # Referencia ligera

    def render(self):
        self.tipo.dibujar(self.x, self.y)

# Uso
t1 = FabricaArboles.obtener_tipo("Pino", "Verde")
t2 = FabricaArboles.obtener_tipo("Pino", "Verde") # No crea objeto nuevo, devuelve el t1

print(f"¿Son el mismo objeto?: {t1 is t2}") # True

arbol1 = Arbol(1, 2, t1)
arbol1.render()