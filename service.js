const express= require('express');
const mongoose= require('mongoose');
const bodyParser=require('body-parser');


//importar el modulo cookie parser
const cookieParser = require('cookie-parser');
const cors = require('cors'); //se importa elmodulo cors, se reinicia el servicio y se instala con npm instal
//cors: CROSS ORIGIN REQUEST SOURCES, es un permiso, para permitir usa el servicio en otro sitio web
//en este caso se le esta dando permiso al servidor 4200
//
const PORT = 666;

const uri="mongodb+srv://anamarquez:analilia20@cluster0.jwk4s.mongodb.net/spgg"
mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true
},
error=>{
    if(error){
        console.log('Error connecting to the database');
        console.log(error);

    }else{
        console.log('Succesfully connected to the mongo database server (Cluster)');
        console.log('Server cluster:'+mongoose.connection.host);
        console.log('Server cluster Port:'+mongoose.connection.port);
    
    }

});
const app= express();
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
//habilita el procesamiento y parseo automatico de las cookies
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:4200',
    credentials:true
}));
//app.use(cors({origin: 'http://localhost:4200',credentials: true}));
//crea un servidor web
app.use(express.static('./public'));


var routerUsers=require('./routers/users');
app.use('/users',routerUsers);


var routerProducts=require('./routers/products');
app.use('/products', routerProducts);

var routerCarts = require('./routers/carts');
app.use('/carts', routerCarts);

app.listen(PORT);