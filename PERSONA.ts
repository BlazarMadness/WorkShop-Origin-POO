export class persona {
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