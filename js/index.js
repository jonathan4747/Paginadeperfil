/*eliminar personas*/
let persona1 = document.querySelector(".persona1");
let persona2 = document.querySelector(".persona2") ;
let numresquest = document.querySelector(".num");
let numconectados = document.querySelector(".num1");
let count = 2;
let conectados = 500;
function eliminar(elemento){
    persona1.remove();  
    count--;
    numresquest.innerText= count    
}
function eliminar1(elemento){
    persona2.remove();
    count--;
    numresquest.innerText= count
}
/*cambiar el perfil*/
let nombre=document.querySelector(".apelativo");

function cambiar(elemento){
    nombre.innerText="Jonathan Q";
}
/* aumentar conexiones*/
function agregar(elemento){
    conectados ++;
    numconectados.innerText= conectados; 
    persona1.remove();  
}
function agregar1(elemento){
    conectados ++;
    numconectados.innerText= conectados;
    persona2.remove()
}