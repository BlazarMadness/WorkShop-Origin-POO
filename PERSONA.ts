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
    proyectos: Proyecto[];
    constructor(salario: number, nombre: string, edad: number, direccion: Direccion, vehiculo: Vehiculo[], estadoCivil: EstadoCivil, proyectos: Proyecto[]) {
    super(nombre, edad, direccion, [], estadoCivil);
    this.salario = salario;
    this.proyectos = proyectos;

   }

   asignarProyecto(proyectos: Proyecto) {
    this.proyectos.push(proyectos);
    console.log(`El proyecto ${proyectos.nombre} fue asignado a ${this.nombre}`);
   }

   trabajar(){
    return console.log(`Hola ${this.nombre} tienes 8 laborales por dia.`);
   }

   saludar() {
    return console.log(`Hola ${this.nombre}, vives en ${this.direccion.ciudad}, tu edad es de ${this.getEdad()} años y tu salario es de ${this.salario}.`);
   }
}


export class Empresa {
    empleados: Empleado[];

    constructor(empleados: Empleado[]){
        this.empleados = empleados;
    }

    agregarEmpleado(empleados: Empleado) {
        this.empleados.push(empleados);
    }

    eliminarEmpleado() {
        this.empleados.filter(empleados => empleados.nombre !== empleados.nombre);
    }

    calcularTotalSalarios() {
       const totalAPagar = this.empleados.reduce((total, empleados) => total + empleados.salario, 0);
       return console.log(`El total de salarios a pagar es de ${totalAPagar}`);
    }
}

export class Proyecto {
    nombre: string;
    descripción: string;

    constructor(nombre: string, descripción: string) {
        this.nombre = nombre;
        this.descripción = descripción;
    }
}



