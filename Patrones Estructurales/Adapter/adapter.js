// 1. Target (Lo que el cliente espera usar)
class EnchufeAmericano {
    conectar110V() {
        throw new Error("Este método debe ser implementado");
    }
}

// 2. Adaptee (La clase incompatible que ya tenemos)
class LicuadoraEuropea {
    conectar220V() {
        console.log("Licuadora funcionando a 220V.");
    }
}

// 3. Adapter (El intermediario)
class AdaptadorEuropeo extends EnchufeAmericano {
    constructor(licuadora) {
        super();
        this.licuadora = licuadora;
    }

    conectar110V() {
        console.log(">>> Adaptando corriente de 110V a 220V...");
        this.licuadora.conectar220V();
    }
}

// Uso
const miLicuadora = new LicuadoraEuropea();
const adaptador = new AdaptadorEuropeo(miLicuadora);

adaptador.conectar110V(); // El cliente usa la interfaz americana