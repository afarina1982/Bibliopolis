import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService){}

    @Get()
    obtenerUsuarios(): Usuario[] {
        return this.usuarioService.obtenerUsuarios();
    }

    @Get(':id')
    obtenerUsuario(@Param('id') id: number): Usuario {
        return this.usuarioService.buscarUsuarioPorId(id);
    }

    @Delete(':id')
    eliminarUsuario(@Param('id') id: number): void {
        this.usuarioService.eliminarUsuario(id);
    }
    
    @Post()
    agregarUsuario(@Body() usuario: Usuario): void {
        this.usuarioService.crearUsuario(usuario);
    }
}
