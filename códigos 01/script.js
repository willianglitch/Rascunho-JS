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
