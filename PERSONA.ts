export class Persona {
    nombre: string;
    private edad: number;
    constructor(nombre: string, edad: number){
    this.nombre = nombre,
    this.edad = edad;
    }

    saludar() {
        console.log(`Tu nombre es ${this.nombre} y tienes ${this.edad} años.`);
    }

    getEdad( ) {
        return this.edad;
    }
}
class Empleado extends Persona {
    salario: number;
    constructor(salario: number, nombre: string, edad: number) {
    super(nombre, edad);
    this.salario = salario;

   }

   trabajar(){
    return console.log(`Hola ${this.nombre} tienes 8 laborales por dia.`);
   }
}