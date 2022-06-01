// atribui-se um tamanho á uma imagem "-02-".

let leafeon = document.getElementById("leaf");

leafeon.addEventListener("click", function(){

   leafeon.setAttribute("height", "34px")
});


// muda imagens de uma para outra "-02-".

let leafeon = document.getElementById("leaf");

leafeon.addEventListener("click", function(){
   
   leafeon.setAttribute("src","./assets/evee.png")
   
   leafeon.addEventListener("click", mudarFoto)

   function mudarFoto(){
      leafeon.setAttribute("src","./assets/shandsherion.png")
      leafeon.setAttribute("height", "350px")
   }
   
});


// lista  "-03-"
// basicamente uma lista de elementos que foi tratado a maneira de 
// pegar elementos e atribui elementos com o "lista.dataset.num".

//  ó correto se eu for criar ou colocar um atributo 
// desconhecido é utilizar ao invés de "num "
//  o "data-num"
// !!!! 

// o que permite fazer isso , sendo tecnicamente a forma mais correta.

let lista = document.getElementById("lista");
lista.dataset.num = "12"
let num = parseInt(lista.dataset.num);

console.log();

let conteúdo =""

for( let i = 0 ; i < num ; i++){
    conteúdo += "<li>" + i + "</li>";
}
lista.innerHTML = conteúdo;

// animação HTML "-04-"
// aula de animação para de como fazer animação , esse não é a melhor
// maneira. a melhor é por meio do canvas 

let jogador = document.getElementById("jogador")

let xInicial = 0;
let yInicial = 0;

function moverQuadrado(x,y){

    let posX = x + "px";
    let posY = y + "px";

    jogador.style.top = posX
    jogador.style.left = posY

}

setInterval(function(){
    moverQuadrado(xInicial++, yInicial++)
}, 14)
// operadores logicos "-05-"
// estudo +!+

let idade = 19;

const idadeMaior20 = idade >= 20 ;
const idadeMenor30 = idade <= 30 ;
const entre = idadeMaior20 && idadeMaior20;

console.log(idade)
console.log(" Maior que vinte " , idadeMaior20)

console.log(" Menor que trintar " , idadeMenor30)
console.log("entre 20 e 30 " , entre)

// strings p/ numeros"-06-"
// parseInt transforma strings em numeros " inteiros " .
//  parseFloat para numeros decimais .tipo : "3.4"

// let a = "6"
// let b = "8"
let a = "6"
let b = "8"

console.log(parseInt(a)+parseInt(b))

// alert e prompt "-07-"
// curiosidade o prompt sempre lançar os valores em strings
const numero = parseInt(prompt(" digite um número "))

const dobro = numero + numero
alert(" o seu numero é = " + numero + " e o dobro dele é " + dobro)
