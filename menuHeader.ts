import { Component,
OnInit
 } from '@angular/core';
 
import {
  Singleton
} from '../../refactoring/DataSingleton';
declare var $: any;


@Component({
  selector: 'main-menu', //como se va a llamar la etiqueta, asignar un nombre unico de etiqueta
  templateUrl: './menuHeader.html', //asignar la ruta del archivo html
  styleUrls: ['./menuHeader.css'] // un arreglo con las rutasde los css
})

//debemos asignarle el nombre de nuestro componente
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    this.ReloadCart();
    var self = this;
    Singleton.GetInstance().ReloadCart = function() {
      self.ReloadCart();
    };
  }


    ReloadCart() {
      var self = this;
      //Singleton.GetInstance().ShowLoader();
      $.ajax({
        type: "GET",
        xhrFields: { //Esto permite compartir cookies
          withCredentials: true
        },
        
  url:"http://localhost:666/carts/getCart",
  success:function(cartInfo:any){
    self.numberProducts = cartInfo.quantity;
    //Singleton.GetInstance().HideLoader();
//console.log('carrito:')
//console.log(cartInfo);

  }
});
  } //cambiar el nombre de appcomponent por el nuestro
  accountRedirect='Login';
  numberProducts = 0;
}