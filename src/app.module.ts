import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './Models/usuario/usuario.controller';
import { LibroController } from './Models/libro/libro.controller';
import { PedidoController } from './Models/pedido/pedido.controller';
import { ItemPedidoController } from './Models/itemPedido/item-pedido.controller';
import { ItemPedidoService } from './Models/itemPedido/item-pedido.service';
import { LibroService } from './Models/libro/libro.service';
import { PedidoService } from './Models/pedido/pedido.service';
import { UsuarioService } from './Models/usuario/usuario.service';

@Module({
  imports: [],
  controllers: [AppController, UsuarioController, LibroController, PedidoController, ItemPedidoController],
  providers: [AppService, ItemPedidoService, LibroService, PedidoService, UsuarioService],
})
export class AppModule {}
