import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router



import { CommerceComponent } from './commerce'; //se importa el componente
import { HeaderComponent } from '../menu-header/menuHeader';
import {CatalogComponent} from '../catalog/catalog';
import {InicioComponent} from '../inicio/inicio';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: '', component: InicioComponent }
];

@NgModule({
  declarations: [
   CommerceComponent,//se añade el componente importado arriba
    //HeaderComponent 
    CatalogComponent
    
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [CommerceComponent] //si se le desea añadir bootstrap
})
export class CommerceModule { } //exportar este modulo con el mimo nombre de nuestro componente
//export class HeaderModule { }