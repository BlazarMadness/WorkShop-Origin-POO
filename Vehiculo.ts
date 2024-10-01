
abstract class Vehiculo {
    marca: string;

    constructor(marca: string){
    this.marca = marca}

    abstract arrancar(): void;
}

class Auto extends Vehiculo {
    constructor(marca: string){
        super(marca);
    }

    arrancar() {
        console.log("Arrancando");
    }
}

class Moto extends Vehiculo {
    constructor(marca: string){
        super(marca);
    }

    arrancar() { 
        console.log("Acelerando");
    }
}