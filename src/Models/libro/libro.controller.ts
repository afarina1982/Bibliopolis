import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LibroService } from './libro.service';
import { Libro } from './libro';

@Controller('libro')
export class LibroController {

    constructor(private readonly libroService: LibroService){}

    @Post()
    crearLibro(@Body() libro: Libro): void {
        this.libroService.crearLibro(libro);
    }

    @Get('isbn')
    obtenerLibro(@Param('isbn') isbn: number): Libro {
        return this.libroService.buscarLibroPorISBN(isbn);
    }
    @Get()
    obtererLibrosFiltrados(@Param('autor') autor: string, @Param('genero') genero: string): Libro[] {
        return this.libroService.obtenerLibrosFiltrados(autor, genero);
    }
    @Delete(':isbn')
    eliminarLibro(@Param('isbn') isbn: string): void {
        this.libroService.eliminarLibro(isbn);
    }


}


