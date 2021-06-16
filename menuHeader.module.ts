import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './menuHeader'; //se importa el componente


@NgModule({
  declarations: [
    HeaderComponent  //se añade el componente importado arriba
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [HeaderComponent] //si se le desea añadir bootstrap
})
export class HeaderModule { } //exportar este modulo con el mimo nombre de nuestro componente
