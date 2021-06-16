const mongoose= require('mongoose');

module.exports=mongoose.model('cart',new mongoose.Schema ({
    id:String,
    products:Array,
    quantity:Number,
    total:Number

}),'carts');

// se le pone id al carrito para volver a restaurar el carrito de una sesión
//se debe recuperar la info de un carrito
// para referenciar el carrito guarda una cookie con el identificador del carrito y la cookie de la sesión

//res.clear cookie- para borrar cookie
//res. cookie para crear cookie
//req.cookie para leer una cookie


//todas la paginas van a tener que llamar al getCart
//si no hay una sesión activa si
//si no existe la cookie cartID: se genera un carrito anonimo nuevo
//ese carrito se identifica y se guarda en la base de datos, crea una cookie con la referencia de ese carrito
//(CartID-->UniqueID)
// se guarda en la bdd y se manda la cookie al ususario
//regresar un carrito vacío

//si existe, buscar el carrito en la BDD, (si no existe volver al paso anterior y continuar aquí)
// regresar la información del carrito


//si hay una sesión(si el usuario hizo login)
//si no existe la cookie cratID:
//se busca el carrito del usuario en la bdd, si no existe se crea uno vacío nuevo
// se crea una cookie con la referencia de ese carrito (CartID->User)
// regresa el carrito

//si existe:
// >>>si es diferente al cartIDdel usuario, fusionar ambos carritos
///se busca el carrito del usuario en la bdd, si no existe se crea uno vacío nuevo
//regresa el carrito