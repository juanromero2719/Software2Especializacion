interface IPersona {
    nombre: string;
    edad: number;
    caracteristicas?: (number | string)[];
}

let caracteristicas: (number | string)[] = ["Alto", "Inteligente", "Lindo"];

const persona: IPersona = {
    nombre: "Juan",
    edad: 20,
    caracteristicas: caracteristicas
}

console.log(persona);

export { };

