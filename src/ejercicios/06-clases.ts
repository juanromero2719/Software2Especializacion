export class Persona {;
    constructor(
        public nombre: string,
        public direccion: string = "Sin direccion"
    ) {
        
    }
}


export class Trabajador {

    constructor(
        public persona: Persona,
        public nombre: string,
        public cargo: string,
        public empresa: string,
        public direccionTrabajo: string
    ) {
        this.persona = new Persona(nombre);
        
    }       
}

const persona_juan = new Persona("Juan");
const trabajador: Trabajador = new Trabajador(persona_juan, "Juan", "Programador", "Google", "Calle 123");
console.log(trabajador);