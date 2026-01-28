// --- Subsistemas Complejos (Lo difícil) ---
class Amplificador {
    encender() { console.log("Amplificador encendido"); }
    setVolumen(n) { console.log(`Volumen al ${n}`); }
}

class Reproductor {
    encender() { console.log("Reproductor encendido"); }
    play(peli) { console.log(`Reproduciendo: ${peli}`); }
}

class Luces {
    atenuar() { console.log("Luces al 10%"); }
}

// --- Facade (La interfaz simple) ---
class CineEnCasa {
    constructor() {
        this.amp = new Amplificador();
        this.repro = new Reproductor();
        this.luces = new Luces();
    }

    // Método simple que hace todo el trabajo sucio
    verPelicula(pelicula) {
        console.log("--- Preparando cine... ---");
        this.luces.atenuar();
        this.amp.encender();
        this.amp.setVolumen(50);
        this.repro.encender();
        this.repro.play(pelicula);
    }
}

// Uso
const cine = new CineEnCasa();
cine.verPelicula("Avengers"); 
// El cliente no necesita saber conectar los cables del amplificador