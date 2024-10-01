
export abstract class Vehiculo {
    marca: string;

    constructor(marca: string){
    this.marca = marca}

    abstract arrancar(): void;
}

export class Auto extends Vehiculo {
    constructor(marca: string){
        super(marca);
    }

    arrancar() {
        console.log("Arrancando");
    }
}

export class Moto extends Vehiculo {
    constructor(marca: string){
        super(marca);
    }

    arrancar() { 
        console.log("Acelerando");
    }
}