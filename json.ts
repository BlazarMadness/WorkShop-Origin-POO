import { Empleado } from "./PERSONA";
const empleadosjson = [
    {
        salario: 1000,
        nombre: "Juan",
        edad: 25,
        direccion: {    
            calle: "av. 1",
            ciudad: "medellin",
            pais: "Colombia"
        },
        vehiculo: []
    },
    {
        salario: 2000,
        nombre: "Pedro",
        edad: 30,
        direccion: {    
            calle: "av. 2",
            ciudad: "bogota",
            pais: "Colombia"
        },
        vehiculo: []
    },
    {
        salario: 3000,
        nombre: "Maria",
        edad: 35,
        direccion: {    
            calle: "av. 3",
            ciudad: "medellin",
            pais: "Colombia"
        },
        vehiculo: []
    },
    {
        salario: 4000,
        nombre: "Luis",
        edad: 40,
        direccion: {    
            calle: "av. 4",
            ciudad: "cali",
            pais: "Colombia"
        },
        vehiculo: []
    },
    {
        salario: 5000,
        nombre: "Carlos",
        edad: 45,
        direccion: {    
            calle: "av. 5",
            ciudad: "barranquilla",
            pais: "Colombia"
        },
        vehiculo: []
    },
    {
        salario: 6000,
        nombre: "Daniel",
        edad: 50,
        direccion: {    
            calle: "av. 6",
            ciudad: "santa marta",
            pais: "Colombia"
        },
        vehiculo: []
    },
    {
        salario: 7000,
        nombre: "Ana",
        edad: 55,
        direccion: {    
            calle: "av. 7",
            ciudad: "villavicencio",
            pais: "Colombia"
        },
        vehiculo: []
    },
    {
        salario: 8000,
        nombre: "Mariana",
        edad: 60,
        direccion: {    
            calle: "av. 8",
            ciudad: "bogota",
            pais: "Colombia"
        },
        vehiculo: []
    },
    {
        salario: 9000,
        nombre: "Jorge",
        edad: 65,
        direccion: {    
            calle: "av. 9",
            ciudad: "pereira",
            pais: "Colombia"
        },
        vehiculo: []
    },
    {
        salario: 10000,
        nombre: "Sofia",
        edad: 70,
        direccion: {    
            calle: "av. 10",
            ciudad: "cucuta",
            pais: "Colombia"
        },
        vehiculo: []
    }
]

const jsonListaEmpleados = JSON.stringify(empleadosjson);


function transformarJSONAEmpleados(json: string): Empleado[] {
    const empleadosData = JSON.parse(json);
    return empleadosData.map((empleado: any) => new Empleado(
        empleado.salario,
        empleado.nombre,
        empleado.edad,
        empleado.direccion,
        empleado.vehiculo,
        empleado.estadoCivil
    ));
}

// Convertir instancias de Empleado a JSON
function transformarEmpleadosAJSON(empleados: Empleado[]): string {
    const empleadosDatos = empleados.map(empleado => ({
        salario: empleado.salario,
        nombre: empleado.nombre,
        edad: empleado.getEdad(),
        direccion: {
            calle: empleado.direccion.calle,
            ciudad: empleado.direccion.ciudad,
            pais: empleado.direccion.pais
        },
        vehiculo: empleado.vehiculo
    }));
    return JSON.stringify(empleadosDatos);
}

// Uso de las funciones

const empleados = transformarJSONAEmpleados(jsonListaEmpleados);
console.log(empleados);

const nuevoJSON = transformarEmpleadosAJSON(empleados);
console.log(nuevoJSON);