from abc import ABC, abstractmethod

# 1. Subject
class Servidor(ABC):
    @abstractmethod
    def peticion(self):
        pass

# 2. RealSubject
class ServidorReal(Servidor):
    def peticion(self):
        print(">> Procesando respuesta desde el Servidor Real...")

# 3. Proxy
class ProxySeguridad(Servidor):
    def __init__(self, usuario):
        self.usuario = usuario
        self.servidor_real = None

    def peticion(self):
        print("Proxy: Verificando acceso...")
        
        if self.usuario == "Admin":
            if not self.servidor_real:
                self.servidor_real = ServidorReal()
            self.servidor_real.peticion()
        else:
            print("Proxy: Acceso denegado.")

# Uso
p1 = ProxySeguridad("Hacker")
p1.peticion()

p2 = ProxySeguridad("Admin")
p2.peticion()