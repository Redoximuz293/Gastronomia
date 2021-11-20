import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';


const routes: Routes = [
  {
    path:'productos',component:ProductosComponent
  },
  {
    path:'contactos',component:ContactosComponent
  },
  {
    path:'fotos',component:FotosComponent
  },
  {
    path:'nosotros',component:NosotrosComponent
  },
  {
    path:'inicio',component:InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
