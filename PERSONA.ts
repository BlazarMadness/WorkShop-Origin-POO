import { Direccion } from "./Direccion";
import { Vehiculo } from "./Vehiculo";
import { EstadoCivil } from "./EstadoCivil";

export class Persona {
    nombre: string;
    private edad: number;
    direccion: Direccion;
    vehiculo: Vehiculo[]
    estadoCivil: EstadoCivil

    constructor(nombre: string, edad: number, direccion: Direccion, vehiculo: Vehiculo[], estadoCivil: EstadoCivil) {
    this.nombre = nombre,
    this.edad = edad;
    this.direccion = direccion;
    this.vehiculo = vehiculo;
    this.estadoCivil = estadoCivil
    }

    saludar() {
        console.log(`Tu nombre es ${this.nombre}, vives en ${this.direccion.ciudad}, tienes ${this.edad} años 
            y tienes ${this.vehiculo.length} vehiculos.`);
    }

    agregarVehiculo(vehiculo: Vehiculo) {
        this.vehiculo.push(vehiculo);
    }

    getEdad( ) {
        return this.edad;
    }
}

export class Empleado extends Persona {
    salario: number;
    constructor(salario: number, nombre: string, edad: number, direccion: Direccion, vehiculo: Vehiculo[], estadoCivil: EstadoCivil) {
    super(nombre, edad, direccion, [], estadoCivil);
    this.salario = salario;

   }

   trabajar(){
    return console.log(`Hola ${this.nombre} tienes 8 laborales por dia.`);
   }

   saludar() {
    return console.log(`Hola ${this.nombre}, vives en ${this.direccion.ciudad}, tu edad es de ${this.getEdad()} años y tu salario es de ${this.salario}.`);
   }
}

