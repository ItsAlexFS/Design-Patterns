from abc import ABC, abstractmethod

# 1. Component
class Componente(ABC):
    @abstractmethod
    def obtener_precio(self) -> float:
        pass

# 2. Leaf
class Producto(Componente):
    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio

    def obtener_precio(self) -> float:
        return self.precio

# 3. Composite
class Caja(Componente):
    def __init__(self):
        self._hijos = []

    def agregar(self, componente: Componente):
        self._hijos.append(componente)

    def obtener_precio(self) -> float:
        total = 0
        for hijo in self._hijos:
            total += hijo.obtener_precio()
        return total

# Uso
telefono = Producto("iPhone", 1000)
cargador = Producto("Cargador", 50)

caja_principal = Caja()
caja_principal.agregar(telefono)
caja_principal.agregar(cargador)

print(f"Precio total: ${caja_principal.obtener_precio()}")