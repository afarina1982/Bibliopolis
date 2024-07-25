import { Pedido } from '../pedido/pedido';


export class Usuario {
    constructor(
        public id: number,
        public nombre: string,
        public correoElectronico: string,
        public contrasena: String,
        public direccion: String,
        public historialPedidos: Pedido[],
    ) { }
}