import { ItemPedido } from "../itemPedido/itemPedido";
import { Usuario } from "../usuario/usuario";

export class Pedido {
    constructor(
        public usuario: Usuario,
        public fechaPedido: Date,
        public estado: string,
        public items: ItemPedido[],
        public total: number,
    ) { }
}
