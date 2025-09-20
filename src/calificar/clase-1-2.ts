interface Comida {
    nombre: string;
    calorias: number;
    esVegana: boolean;
}

const Pizza: Comida = {
    nombre: "Pizza",
    calorias: 800,
    esVegana: false,
}

const Ensalada: Comida = {
    nombre: "Ensalada",
    calorias: 150,
    esVegana: true,
}

const Hamburguesa: Comida = {
    nombre: "Hamburguesa",
    calorias: 600,
    esVegana: false,
}

export class ComidaService {
    public mostrarInfo(comida: Comida): void {
        console.log(`La comida ${comida.nombre} tiene ${comida.calorias} calorias y es ${comida.esVegana ? "vegana" : "no vegana"}`);
    }
    public modificarCalorias(comida: Comida, calorias: number): void {
        comida.calorias = calorias;
    }
}

export class NotificarComida{
    constructor(public comidaService: ComidaService){
        this.comidaService = comidaService;
    }
    public notificar(comida: Comida): void {
        console.log("Notificando comida...");
        this.comidaService.mostrarInfo(comida);
    }
}

const comidaService: ComidaService = new ComidaService();
const notificarComida: NotificarComida = new NotificarComida(comidaService);
notificarComida.notificar(Pizza);
notificarComida.notificar(Ensalada);
notificarComida.notificar(Hamburguesa);

comidaService.modificarCalorias(Pizza, 500);
notificarComida.notificar(Pizza);



