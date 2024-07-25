import { Libro } from '../libro/libro';

export class ItemPedido {
    constructor(
        public libro: Libro,
        public cantidad: number,
    ) { }
}