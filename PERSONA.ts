import { Direccion } from "./Direccion";

export class Persona {
    nombre: string;
    private edad: number;
    direccion: Direccion
    constructor(nombre: string, edad: number, direccion: Direccion){
    this.nombre = nombre,
    this.edad = edad;
    this.direccion = direccion;
    }

    saludar() {
        console.log(`Tu nombre es ${this.nombre}, vives en ${this.direccion.ciudad} y tienes ${this.edad} años.`);
    }

    getEdad( ) {
        return this.edad;
    }
}

export class Empleado extends Persona {
    salario: number;
    constructor(salario: number, nombre: string, edad: number, direccion: Direccion) {
    super(nombre, edad, direccion);
    this.salario = salario;

   }

   trabajar(){
    return console.log(`Hola ${this.nombre} tienes 8 laborales por dia.`);
   }

   saludar() {
    return console.log(`Hola ${this.nombre}, vives en ${this.direccion.ciudad}, tu edad es de ${this.getEdad()} años y tu salario es de ${this.salario}.`);
   }
}

