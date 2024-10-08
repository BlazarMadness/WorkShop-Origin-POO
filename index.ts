import { Persona } from "./PERSONA";
import { Empleado } from "./PERSONA";
import { Auto } from "./Vehiculo";
import { Moto } from "./Vehiculo";
import { EstadoCivil } from "./EstadoCivil";
import { Proyecto } from "./PERSONA";
import { Departamento } from "./PERSONA";


// instancias de vehiculos
const auto1 = new Auto("Toyota");
const Moto1 = new Moto("Kawasaki");

// instancias de personas
const persona1 = new Persona("Juan", 25, { calle: "av. 1", ciudad: "Cartagena", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.soltero);
persona1.saludar();

const persona2 = new Persona("Pedro", 30, { calle: "av. 2", ciudad: "Bogota", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.casado);
persona2.saludar();

const persona3 = new Persona("Maria", 35 , { calle: "av. 3", ciudad: "Medellin", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.divorciado);
persona3.saludar();

const persona4 = new Persona("Luis", 40, { calle: "av. 4", ciudad: "Cali", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.soltero);
persona4.saludar();

const persona5 = new Persona("Carlos", 45 , { calle: "av. 5", ciudad: "Barranquilla", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.casado);
persona5.saludar();

const persona6 = new Persona("Daniel", 50 , { calle: "av. 6", ciudad: "Santa Marta", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.divorciado);
persona6.saludar();

const persona7 = new Persona("Ana", 55, { calle: "av. 7", ciudad: "Villavicencio", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.soltero);
persona7.saludar();

const persona8 = new Persona("Mariana", 60, {calle: "av. 8", ciudad: "Manizales", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.casado);
persona8.saludar();

const persona9 = new Persona("Jorge", 65, { calle: "av. 9", ciudad: "Pereira", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.divorciado);
persona9.saludar();

const persona10 = new Persona("Sofia", 70, { calle: "av. 10", ciudad: "Cucuta", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.soltero);
persona10.saludar();

// instancia de empleados
const empleado1 = new Empleado(1000, "Juan", 25, { calle: "av. 1", ciudad: "Cartagena", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.soltero, []);
empleado1.saludar();

const empleado2 = new Empleado(2000, "Pedro", 30, { calle: "av. 2", ciudad: "Bogota", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.casado, []);
empleado2.saludar();

const empleado3 = new Empleado(3000, "Maria", 35, { calle: "av. 3", ciudad: "Medellin", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.divorciado, []);
empleado3.saludar();

const empleado4 = new Empleado(4000, "Luis", 40, { calle: "av. 4", ciudad: "Cali", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.soltero, []);
empleado4.saludar();

const empleado5 = new Empleado(5000, "Carlos", 45, { calle: "av. 5", ciudad: "Barranquilla", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.casado, []);
empleado5.saludar();

const empleado6 = new Empleado(6000, "Daniel", 50, { calle: "av. 6", ciudad: "Santa Marta", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.divorciado, []);
empleado6.saludar();

const empleado7 = new Empleado(7000, "Ana", 55, { calle: "av. 7", ciudad: "Villavicencio", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.soltero, []);
empleado7.saludar();

const empleado8 = new Empleado(8000, "Mariana", 60, { calle: "av. 8", ciudad: "Manizales", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.casado, []);
empleado8.saludar();

const empleado9 = new Empleado(9000, "Jorge", 65, { calle: "av. 9", ciudad: "Pereira", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.divorciado, []);
empleado9.saludar();

const empleado10 = new Empleado(10000, "Sofia", 70, { calle: "av. 10", ciudad: "Cucuta", pais: "Colombia" }, [auto1, Moto1], EstadoCivil.soltero, []);
empleado10.saludar();

// instancias de proyecto
const proyecto1 = new Proyecto("Web Store", "crear un sitio web para una tienda de ropa");
const proyecto2 = new Proyecto("web Store 2", "crear un sitio web para una tienda de tecnologia");

// asignar proyectos
empleado1.asignarProyecto(proyecto1);
empleado1.asignarProyecto(proyecto2);

empleado2.asignarProyecto(proyecto1);
empleado2.asignarProyecto(proyecto2);

empleado3.asignarProyecto(proyecto1);
empleado3.asignarProyecto(proyecto2);

empleado4.asignarProyecto(proyecto1);
empleado4.asignarProyecto(proyecto2);

empleado5.asignarProyecto(proyecto1);
empleado5.asignarProyecto(proyecto2);

empleado6.asignarProyecto(proyecto1);
empleado6.asignarProyecto(proyecto2);

empleado7.asignarProyecto(proyecto1);
empleado7.asignarProyecto(proyecto2);

empleado8.asignarProyecto(proyecto1);
empleado8.asignarProyecto(proyecto2);

empleado9.asignarProyecto(proyecto1);
empleado9.asignarProyecto(proyecto2);

empleado10.asignarProyecto(proyecto1);
empleado10.asignarProyecto(proyecto2);


// Instancias de Departamento
const departamento = new Departamento ("Desarrollo", [])

departamento.añadirEmpleados(empleado1);
departamento.añadirEmpleados(empleado2);
departamento.añadirEmpleados(empleado3);
departamento.añadirEmpleados(empleado4);
departamento.añadirEmpleados(empleado5);
departamento.añadirEmpleados(empleado6);
departamento.añadirEmpleados(empleado7);
departamento.añadirEmpleados(empleado8);
departamento.añadirEmpleados(empleado9);
departamento.añadirEmpleados(empleado10);

departamento.listarEmpleados();

departamento.eliminarEmpleado("Sofia");

departamento.listarEmpleados();