function  firts(){
    console.log("Primera funcion");
}
function  second(callback){
    setTimeout(() =>  {
        console.log("Segunda funcion");
        callback();
    },  0);
    
}
function  third(){
    console.log("Tercera funcion");
}



//llamando a las funciones
firts();
second(third);
