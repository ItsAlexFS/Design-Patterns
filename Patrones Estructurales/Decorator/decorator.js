// 1. Component (Interfaz común)
class Cafe {
    costo() { return 5; } // Costo base
    descripcion() { return "Café simple"; }
}

// 2. Decorator (Base - Mantiene la referencia)
class DecoradorCafe extends Cafe {
    constructor(cafe) {
        super();
        this.cafe = cafe; // Referencia al objeto envuelto
    }

    costo() { return this.cafe.costo(); }
    descripcion() { return this.cafe.descripcion(); }
}

// 3. Concrete Decorators (Los agregados)
class ConLeche extends DecoradorCafe {
    costo() {
        return this.cafe.costo() + 2; // Suma su precio
    }
    descripcion() {
        return this.cafe.descripcion() + ", con Leche";
    }
}

class ConAzucar extends DecoradorCafe {
    costo() {
        return this.cafe.costo() + 1;
    }
    descripcion() {
        return this.cafe.descripcion() + ", con Azúcar";
    }
}

// Uso
let miCafe = new Cafe(); // $5
miCafe = new ConLeche(miCafe); // $7 (5+2)
miCafe = new ConAzucar(miCafe); // $8 (7+1)

console.log(`${miCafe.descripcion()} cuesta $${miCafe.costo()}`);
// Salida: Café simple, con Leche, con Azúcar cuesta $8