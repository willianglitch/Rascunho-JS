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