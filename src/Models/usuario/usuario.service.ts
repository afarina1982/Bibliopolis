import { Injectable, NotFoundException } from '@nestjs/common';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {
    private usuarios: Usuario[] = [];

    crearUsuario(usuario: Usuario): void {
        if (this.usuarios.some(u => u.correoElectronico == usuario.correoElectronico)) {
            throw new Error('El correo electrónico ya está registrado.');
        }
        usuario.id = this.usuarios.length + 1;
        this.usuarios.push(usuario);
    }
    
    obtenerUsuarios(): Omit<Usuario, 'contrasena'>[] {
        return this.usuarios.map(({ contrasena, ...rest }) => rest);
    }

    eliminarUsuario(id: number): void {
        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].id == id) {
                this.usuarios.splice(i, 1);
            }
        }
    }
    buscarUsuarioPorId(id: number): Usuario {
        const usuario = this.usuarios.find(u => u.id === id);
        if (!usuario) {
            throw new NotFoundException('Usuario no encontrado.');
        }
        return usuario;
    }
    }
}

