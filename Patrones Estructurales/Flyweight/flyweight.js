// 1. Flyweight (Estado compartido: Nombre y Color)
class TipoArbol {
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }

    // El estado único (x, y) se pasa por método, no se guarda aquí
    dibujar(x, y) {
        console.log(`Dibujando ${this.nombre} color ${this.color} en [${x}, ${y}]`);
    }
}

// 2. Flyweight Factory (Gestiona el caché)
class FabricaArboles {
    constructor() {
        this.tipos = {}; // Aquí guardamos los tipos creados
    }

    obtenerTipo(nombre, color) {
        const key = `${nombre}-${color}`;
        if (!this.tipos[key]) {
            // Solo se crea si no existe
            this.tipos[key] = new TipoArbol(nombre, color);
            console.log(`(Fabricando nuevo prototipo: ${nombre})`);
        }
        return this.tipos[key];
    }
}

// 3. Context (Objeto que une lo único con lo compartido)
class Arbol {
    constructor(x, y, tipo) {
        this.x = x; // Único
        this.y = y; // Único
        this.tipo = tipo; // Compartido (Referencia)
    }

    render() {
        this.tipo.dibujar(this.x, this.y);
    }
}

// Uso
const fabrica = new FabricaArboles();

// Simulamos plantar un bosque
const arboles = [];

// Creamos 1000 árboles, pero SOLO existen 2 objetos "TipoArbol" en memoria
const tipoPino = fabrica.obtenerTipo("Pino", "Verde");
const tipoRoble = fabrica.obtenerTipo("Roble", "Cafe");

arboles.push(new Arbol(10, 20, tipoPino));
arboles.push(new Arbol(15, 25, tipoPino)); // Reusa el objeto "Pino"
arboles.push(new Arbol(50, 80, tipoRoble));

arboles.forEach(a => a.render());