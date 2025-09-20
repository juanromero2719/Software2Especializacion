interface IUsuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
    roles: string[];
    direccion: IDireccion;
    saludar(): void;
    actualizarEmail(nuevoEmail: string): void;
}

interface IDireccion {
    ciudad: string;
    pais: string;
}

const usuario: IUsuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@gmail.com",
    activo: true,
    roles: ["admin", "editor"],
    direccion: { 
        ciudad: "Bogota", 
        pais: "Colombia" 
    },
    saludar() {
        console.log("Hola mi nombre es " + this.nombre);
    },
    actualizarEmail(nuevoEmail: string) {
        this.email = nuevoEmail;
    }
}
