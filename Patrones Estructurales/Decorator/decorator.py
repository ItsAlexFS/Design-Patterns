from abc import ABC, abstractmethod

# 1. Component
class Cafe(ABC):
    @abstractmethod
    def costo(self) -> int:
        pass
    
    @abstractmethod
    def descripcion(self) -> str:
        pass

# Componente Concreto (Base)
class CafeSimple(Cafe):
    def costo(self) -> int:
        return 5
    def descripcion(self) -> str:
        return "Café simple"

# 2. Decorator Base
class DecoradorCafe(Cafe):
    def __init__(self, cafe: Cafe):
        self._cafe = cafe

    def costo(self) -> int:
        return self._cafe.costo()
    
    def descripcion(self) -> str:
        return self._cafe.descripcion()

# 3. Concrete Decorators
class ConLeche(DecoradorCafe):
    def costo(self) -> int:
        return self._cafe.costo() + 2
    
    def descripcion(self) -> str:
        return self._cafe.descripcion() + ", con Leche"

# Uso
mi_cafe = CafeSimple()
mi_cafe = ConLeche(mi_cafe) # Envolvemos

print(f"{mi_cafe.descripcion()} cuesta ${mi_cafe.costo()}")