// 1. Component (La interfaz común)
class Componente {
    obtenerPrecio() {
        throw new Error("Método no implementado");
    }
}

// 2. Leaf (Hoja - El objeto simple)
class Producto extends Componente {
    constructor(nombre, precio) {
        super();
        this.nombre = nombre;
        this.precio = precio;
    }

    obtenerPrecio() {
        return this.precio;
    }
}

// 3. Composite (Contenedor - Contiene hojas u otros contenedores)
class Caja extends Componente {
    constructor() {
        super();
        this.hijos = []; // Lista de componentes
    }

    agregar(componente) {
        this.hijos.push(componente);
    }

    obtenerPrecio() {
        let total = 0;
        // Recorre sus hijos y suma sus precios (recursividad)
        for (const hijo of this.hijos) {
            total += hijo.obtenerPrecio();
        }
        return total;
    }
}

// Uso
const telefono = new Producto("iPhone", 1000);
const audifonos = new Producto("AirPods", 200);

const cajaPequeña = new Caja();
cajaPequeña.agregar(audifonos);

const cajaGrande = new Caja();
cajaGrande.agregar(telefono);
cajaGrande.agregar(cajaPequeña); // Una caja dentro de otra

console.log(`Precio total: $${cajaGrande.obtenerPrecio()}`); 
// Salida: Precio total: $1200