import { Persona } from "./PERSONA";

const transformarYSaludar = (json: any) => {
    const persona = new Persona(json.nombre, json.edad, json.direccion, json.vehiculo);
    persona.saludar();
};

const personaJSON = {
    nombre: "Juan",
    edad: 25,
    direccion: {
        calle: "av. 1",
        ciudad: "medellin",
        pais: "Colombia"},
    vehiculo: []
}

const crearYSaludar = (): void => {
    transformarYSaludar(personaJSON);
}

crearYSaludar();
