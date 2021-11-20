import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Firebase config
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { PrimeModule } from './primemodule';
import { ProductosComponent } from './pages/productos/productos.component';
import { MenubarModule } from 'primeng/menubar';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { InicioComponent } from './pages/inicio/inicio.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ContactosComponent,
    NosotrosComponent,
    FotosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    PrimeModule,
    MenubarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
