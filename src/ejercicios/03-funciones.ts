function sumar(a: number, b: number): number {
    return a + b;
}

const restar = (a: number, b: number): number => {
    return a - b;
}

const multiplicar = (a: number, b: number, c?: number): number => {
    return a * b * (c || 4);
}

console.log(sumar(1, 2));
console.log(restar(1, 2));
console.log(multiplicar(1, 2, 3));

interface IPersona {
    nombre: string;
    vida: number;
    mostrarDetalles: () => void;
}

const PorcentajeVida = (persona: IPersona, vida: number): void => {
    persona.vida = vida;
}

let persona_sebastian: IPersona = {
    nombre: "Sebastian",     
    vida: 100,
    mostrarDetalles: () => {
        console.log(`Nombre: ${persona_sebastian.nombre}, Vida: ${persona_sebastian.vida}`);
    }
}

PorcentajeVida(persona_sebastian, 50);

console.log(persona_sebastian);

PorcentajeVida(persona_sebastian, 20);

console.log(persona_sebastian);

export { };
