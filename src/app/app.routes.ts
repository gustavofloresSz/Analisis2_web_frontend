import { Routes } from '@angular/router';
import { CrearUsuarioComponent } from './componentes/usuario/crear-usuario/crear-usuario.component';
import { ListaUsuarioComponent } from './componentes/usuario/lista-usuario/lista-usuario.component';
import { CrearProductoComponent } from './componentes/producto/crear-producto/crear-producto.component';
import { ListaProductoComponent } from './componentes/producto/lista-producto/lista-producto.component';
import { CrearOrdenesComponent } from './componentes/ordenes/crear-ordenes/crear-ordenes.component';
import { ListaOrdenesComponent } from './componentes/ordenes/lista-ordenes/lista-ordenes.component';

export const routes: Routes = [
    {path:"crear",component : CrearUsuarioComponent},
    {path:"mostrar",component : ListaUsuarioComponent},

    {path:"registrar",component : CrearProductoComponent},
    {path:"mostrarProducto",component : ListaProductoComponent},

    {path:"registrarOrdenes",component : CrearOrdenesComponent},
    {path:"mostrarOrdenes",component : ListaOrdenesComponent},
];
