import { Injectable, NotFoundException } from '@nestjs/common';
import { Libro } from './libro';

@Injectable()
export class LibroService {
    buscarLibroPorISBN(isbn: number): Libro {
        throw new Error('No se encuentra ISBN');
    }
    private libros: Libro[] = [];

crearLibro(libro: Libro): void {
    if (this.libros.some(l => l.isbn == libro.isbn)) {
        throw new Error('El libro ya está registrado.');
    }
    this.libros.push(libro);
}

obtenerLibros(id: string): Libro {
    for (let i = 0; i < this.libros.length; i++) {
        if (this.libros[i].isbn == id) {
            return this.libros[i];
        }
    }
}


obtenerLibrosFiltrados(autor: string, genero: string): Libro[] { 
    return this.libros.filter(l => l.autor == autor || l.genero == genero);
}


eliminarLibro(ibsn: string): void {
    for (let i = 0; i < this.libros.length; i++) {
        if (this.libros[i].isbn == ibsn) {
            this.libros.splice(i, 1);
        }
    }
}

}
