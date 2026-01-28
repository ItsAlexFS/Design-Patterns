// 1. Subject (La Interfaz común)
class Servidor {
    peticion() {
        throw new Error("Método no implementado");
    }
}

// 2. RealSubject (El objeto real que hace el trabajo)
class ServidorReal extends Servidor {
    peticion() {
        console.log(">> Procesando respuesta desde el Servidor Real...");
    }
}

// 3. Proxy (El intermediario que añade seguridad o lógica extra)
class ProxySeguridad extends Servidor {
    constructor(usuario) {
        super();
        this.usuario = usuario;
        this.servidorReal = null; // Lazy loading (opcional)
    }

    peticion() {
        console.log("Proxy: Verificando acceso...");
        
        if (this.usuario === "Admin") {
            // Solo si pasa la validación, llamamos al objeto real
            if (!this.servidorReal) {
                this.servidorReal = new ServidorReal();
            }
            this.servidorReal.peticion();
        } else {
            console.log("Proxy: Acceso denegado. No eres administrador.");
        }
    }
}

// Uso
const usuario1 = new ProxySeguridad("Invitado");
usuario1.peticion(); 
// Salida: Acceso denegado.

const usuario2 = new ProxySeguridad("Admin");
usuario2.peticion(); 
// Salida: Verificando... Procesando respuesta...