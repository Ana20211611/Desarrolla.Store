//singleton es un patron de diseño que permite crear una refrencia que se pueda compartir en diferentes lados
//declarar un objeto que si no existe la variable la crea
//static es que no necesariamente se debe crear un objeto de ese tipo
//para acceder a un metodo
// cada vez que se mporte estas lineas

declare var global:any;

if (!global.singleton){
    global.singleton={};

}

export class Singleton{
    static GetInstance(){
        return global.singleton;
    }
}