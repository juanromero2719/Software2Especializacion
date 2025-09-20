import {type Producto, calcularImpuesto } from "./04-desestructurador";

const carrito: Producto[] = [
    {
        descripcion: "Carro",
        precio: 1020,
    },
    {
        descripcion: "Celular",
        precio: 1010,
    },
]

const [total, totalImpuesto] = calcularImpuesto({
    impuesto: 100,
    producto: carrito,
    propina: 0,
});
console.log({total, totalImpuesto});