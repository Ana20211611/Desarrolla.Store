import { 
  Component,
  OnInit,//se agrega la función OnInit
  ChangeDetectorRef


} from '@angular/core';
import { Singleton } from '../../refactoring/DataSingleton';
declare var $: any;

@Component({
  selector: 'catalog',
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.css']
})
export class CatalogComponent implements OnInit{ //se agrega la función OnInit
  
 
  
  ngOnInit() {
    //console.log('Yo me ejecuto después de que se incializa el componente');
    //console.log('El valor de productos es: ' + this.products);
    //Hacer mi petición a http://localhost:666/products/all
    this.GetProducts();
    $(".toast").toast();
    
  }

 GetProducts() {
   var self = this;
   //Singleton.GetInstance().ShowLoader();
   $.ajax({
     type: "GET",
     url: 'http://localhost:666/products/all',
     success: function (res: any) {
       //console.log(self.products); //null
       self.products = res;
       //Singleton.GetInstance().HideLoader();
       //console.log(self.products); //[]
     }
   });
 }

GetCart(){ //se crea la función
  var self=this;
  $.ajax({
    type:"GET",
    url:'http://localhost:666/products/all',
    success:function(res:any){  //success, es la petición de ajax para dar el resultado
    

      //console.log(self.products); //null
      self.products=res;
      //console.log(self.products); //[]
    
    }
  });
}
  
AddToCart(sku:String){ //
  
    var self=this;
    $.ajax({
      type:"PATCH",
      xhrFields:{
        withCredentials:true
      },
      url:'http://localhost:666/carts/add',
      data:{
        sku:sku,
        qty:1
      },
      success:function(res:any){ 
        $(".toast").toast('show');
       
        Singleton.GetInstance().ReloadCart();
        //success, es la petición de ajax para dar el resultado
  //console.log('Add to cart:');
  //console.log(res);

  //self.showAlert=true;
}
    });
  }
showAlert=false;
  products=null;
  



}
