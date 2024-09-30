import { Persona } from "./PERSONA";

const transformarYSaludar = (json: any) => {
    const persona = new Persona(json.nombre, json.edad, json.direccion);
    persona.saludar();
};

const crearYSaludar = (): void => {
    const personaJSON = {
        nombre: "Juan",
        edad: 25,
        direccion: {
            calle: "av. 1",
            ciudad: "medellin",
            pais: "Colombia"}
    }

    transformarYSaludar(personaJSON);
}

crearYSaludar();
