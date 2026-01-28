# 1. Target (Interfaz esperada)
class EnchufeAmericano:
    def conectar_110v(self):
        pass

# 2. Adaptee (Clase incompatible)
class LicuadoraEuropea:
    def conectar_220v(self):
        print("Licuadora funcionando a 220V.")

# 3. Adapter (Intermediario)
class AdaptadorEuropeo(EnchufeAmericano):
    def __init__(self, licuadora):
        self.licuadora = licuadora

    def conectar_110v(self):
        print(">>> Adaptando corriente de 110V a 220V...")
        self.licuadora.conectar_220v()

# Uso
if __name__ == "__main__":
    mi_licuadora = LicuadoraEuropea()
    adaptador = AdaptadorEuropeo(mi_licuadora)
    
    adaptador.conectar_110v()