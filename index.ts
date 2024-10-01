import { Persona } from "./PERSONA";
import { Empleado } from "./PERSONA";
import { Auto } from "./Vehiculo";
import { Moto } from "./Vehiculo";


const auto1 = new Auto("Toyota");
const Moto1 = new Moto("Kawasaki");


const persona1 = new Persona("Juan", 25, { calle: "av. 1", ciudad: "Cartagena", pais: "Colombia" }, [auto1, Moto1]);
persona1.saludar();

const persona2 = new Persona("Pedro", 30, { calle: "av. 2", ciudad: "Bogota", pais: "Colombia" }, [auto1, Moto1]);
persona2.saludar();

const persona3 = new Persona("Maria", 35 , { calle: "av. 3", ciudad: "Medellin", pais: "Colombia" }, [auto1, Moto1]);
persona3.saludar();

const persona4 = new Persona("Luis", 40, { calle: "av. 4", ciudad: "Cali", pais: "Colombia" }, [auto1, Moto1]);
persona4.saludar();

const persona5 = new Persona("Carlos", 45 , { calle: "av. 5", ciudad: "Barranquilla", pais: "Colombia" }, [auto1, Moto1]);
persona5.saludar();

const persona6 = new Persona("Daniel", 50 , { calle: "av. 6", ciudad: "Santa Marta", pais: "Colombia" }, [auto1, Moto1]);
persona6.saludar();

const persona7 = new Persona("Ana", 55, { calle: "av. 7", ciudad: "Villavicencio", pais: "Colombia" }, [auto1, Moto1]);
persona7.saludar();

const persona8 = new Persona("Mariana", 60, {calle: "av. 8", ciudad: "Manizales", pais: "Colombia" }, [auto1, Moto1]);
persona8.saludar();

const persona9 = new Persona("Jorge", 65, { calle: "av. 9", ciudad: "Pereira", pais: "Colombia" }, [auto1, Moto1]);
persona9.saludar();

const persona10 = new Persona("Sofia", 70, { calle: "av. 10", ciudad: "Cucuta", pais: "Colombia" }, [auto1, Moto1]);
persona10.saludar();


const empleado1 = new Empleado(1000, "Juan", 25, { calle: "av. 1", ciudad: "Cartagena", pais: "Colombia" }, [auto1, Moto1]);
empleado1.saludar();

const empleado2 = new Empleado(2000, "Pedro", 30, { calle: "av. 2", ciudad: "Bogota", pais: "Colombia" }, [auto1, Moto1]);
empleado2.saludar();

const empleado3 = new Empleado(3000, "Maria", 35, { calle: "av. 3", ciudad: "Medellin", pais: "Colombia" }, [auto1, Moto1]);
empleado3.saludar();

const empleado4 = new Empleado(4000, "Luis", 40, { calle: "av. 4", ciudad: "Cali", pais: "Colombia" }, [auto1, Moto1]);
empleado4.saludar();

const empleado5 = new Empleado(5000, "Carlos", 45, { calle: "av. 5", ciudad: "Barranquilla", pais: "Colombia" }, [auto1, Moto1]);
empleado5.saludar();

const empleado6 = new Empleado(6000, "Daniel", 50, { calle: "av. 6", ciudad: "Santa Marta", pais: "Colombia" }, [auto1, Moto1]);
empleado6.saludar();

const empleado7 = new Empleado(7000, "Ana", 55, { calle: "av. 7", ciudad: "Villavicencio", pais: "Colombia" }, [auto1, Moto1]);
empleado7.saludar();

const empleado8 = new Empleado(8000, "Mariana", 60, { calle: "av. 8", ciudad: "Manizales", pais: "Colombia" }, [auto1, Moto1]);
empleado8.saludar();

const empleado9 = new Empleado(9000, "Jorge", 65, { calle: "av. 9", ciudad: "Pereira", pais: "Colombia" }, [auto1, Moto1]);
empleado9.saludar();

const empleado10 = new Empleado(10000, "Sofia", 70, { calle: "av. 10", ciudad: "Cucuta", pais: "Colombia" }, [auto1, Moto1]);
empleado10.saludar();

