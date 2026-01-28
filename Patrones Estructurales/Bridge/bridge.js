// 1. Implementor (La Interfaz del dispositivo)
class Dispositivo {
    encender() { throw new Error("Método no implementado"); }
    apagar() { throw new Error("Método no implementado"); }
    setVolumen(percent) { throw new Error("Método no implementado"); }
}

// 2. Concrete Implementors (Dispositivos reales)
class TV extends Dispositivo {
    encender() { console.log("TV encendida"); }
    apagar() { console.log("TV apagada"); }
    setVolumen(percent) { console.log(`TV volumen al ${percent}%`); }
}

class Radio extends Dispositivo {
    encender() { console.log("Radio encendida"); }
    apagar() { console.log("Radio apagada"); }
    setVolumen(percent) { console.log(`Radio volumen al ${percent}%`); }
}

// 3. Abstraction (El control remoto básico)
class ControlRemoto {
    constructor(dispositivo) {
        this.dispositivo = dispositivo; // EL PUENTE (Bridge)
    }

    togglePower() {
        console.log("Presionando botón Power...");
        this.dispositivo.encender(); 
    }
}

// 4. Refined Abstraction (Un control más avanzado)
class ControlAvanzado extends ControlRemoto {
    mute() {
        console.log("Presionando botón Mute...");
        this.dispositivo.setVolumen(0);
    }
}

// Uso
const miTv = new TV();
const control = new ControlAvanzado(miTv);

control.togglePower(); // Usa la TV
control.mute();        // Usa la TV