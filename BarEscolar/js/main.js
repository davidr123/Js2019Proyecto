$(document).ready(function() {
    console.log("jhdjh")
 var datos=[];
    var arregloTagsImg=[]
    arrayDiv=[]
    div1=document.getElementById("1")
    div2=document.getElementById("2")
    arrayDiv.push(div1)
    arrayDiv.push(div2)
    // arrayDiv.push(document.getElementById("3"))
    // arrayDiv.push( document.getElementById("4"))
    // arrayDiv.push( document.getElementById("5"))
    // arrayDiv.push(document.getElementById("6"))
    // arrayDiv.push(document.getElementById("7"))
    // arrayDiv.push(document.getElementById("8"))
    cont=0;
$.getJSON( "js/frutas.json", function( data ) {
    var conten=document.getElementById("contenFrutas");
    var botellas=document.createElement("div");
    var celda = document.createElement("div");  
    celda.className="misfrutas col-md-6";
    botellas.className="misfrutas col-md-6";
    celda.setAttribute("id","miprimerdiv")
    
   data.forEach((element)=>{
     
      var imagenFrutar = document.createElement("img");
      imagenFrutar.className=element.id;
      imagenFrutar.setAttribute("id",element.id)
      console.log(element.rutaImg)
      imagenFrutar.src=element.rutaImg;
  
      imagenFrutar.setAttribute("class","draggable")
     if(cont>=5){
 
     botellas.appendChild(imagenFrutar)
 
 
     }else{
  
      arregloTagsImg.push(imagenFrutar)
      
      celda.appendChild(imagenFrutar)
   
     cont++
    datos.push(element)  
  }
  }) 
  conten.appendChild(celda); //agrega los avatares
  conten.appendChild(botellas);
   $(function() {
    $( ".draggable" ).draggable({ 
     drag: function(event, ui){
        datos.forEach(element=>{
            console.log($(this).attr("id"))
            if(element.id==$(this).attr("id"))
                 $( "#"+element.id).draggable({ 
            drag: function(event, ui){
         
     }})
              $(this).append(element.id);
        }) 
     
     }
    })
      
});
$(function() {
  $("#lonchera1").droppable({
    activeClass: "draggable",
  
    drop: function (event, ui) {
      datos.forEach(element=>{
      $(this).append();
     
    })
  }
});
});

});

 

    

});

//
//// * Función que se ejecuta al arrastrar el elemento. 
//
// function start(e) {
//    e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
//    e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
//    e.target.style.opacity = '0.4'; 
//}
//
//// /**
//// * Función que se ejecuta se termina de arrastrar el elemento. 
//// **/
// function end(e){
//    e.target.style.opacity = ''; // Restaura la opacidad del elemento           
//     e.dataTransfer.clearData("Data");           
// }
//
//// /**
//// * Función que se ejecuta cuando un elemento arrastrable entra en el elemento desde del que se llama. 
//// **/
// function enter(e) {
//     return true;
// }
//
//// /**
//// * Función que se ejecuta cuando un elemento arrastrable esta sobre el elemento desde del que se llama. 
//// * Devuelve false si el objeto se puede soltar en ese elemento y true en caso contrario.
//// **/
// function over(e) {
//    if ((e.target.className == "contenedorPieza") || (e.target.id == "contenedorPiezas"))
//         return false;
//     else
//     return true;
// }
//    
// /**
// * Función que se ejecuta cuando un elemento arrastrable se suelta sobre el elemento desde del que se llama. 
// **/
// function drop(e){
//     e.preventDefault(); // Evita que se ejecute la accion por defecto del elemento soltado.
//     var elementoArrastrado = e.dataTransfer.getData("Text");
//     e.target.appendChild(document.getElementById(elementoArrastrado)); // Coloca el elemento soltado sobre el elemento desde el que se llamo esta funcion
//     comprobarPuzzle();
// }
//
// function comprobarPuzzle(){
//     if((document.getElementById('pieza1').parentNode.id=='uno') &&
//         (document.getElementById('pieza2').parentNode.id=='dos') &&
//         (document.getElementById('pieza3').parentNode.id=='tres') &&
//         (document.getElementById('pieza4').parentNode.id=='cuatro') &&
//         (document.getElementById('pieza5').parentNode.id=='cinco') &&
//         (document.getElementById('pieza6').parentNode.id=='seis')) &&
//         (document.getElementById('pieza7').parentNode.id=='siete') &&
//         (document.getElementById('pieza8').parentNode.id=='ocho') &&
//         (document.getElementById('pieza9').parentNode.id=='nueve') &&
//         (document.getElementById('pieza10').parentNode.id=='diez') 
//     {
//         alert('Felicidades, has hecho el puzzle.');
//     }
//     else
//     {
//         document.getElementById("resultado").innerHTML = "INCOMPLETO";
//     }
// }
//
//// /**
//// * Muestra un mensaje de advertencia si el navegador no soporta Drag & Drop. (En Windows no lo soportan ni IE ni Safari)
//// **/
// function comprobarnavegador() {
//     if( 
//         (navigator.userAgent.toLowerCase().indexOf('msie ') > -1) || 
//         ((navigator.userAgent.toLowerCase().indexOf('safari') > -1) && (navigator.userAgent.toLowerCase().indexOf('chrome') == -1)))
//     {
//         alert("Tu navegador no soporta correctamente las funciones Drag & Drop de HTML5. Prueba con otro navegador.");
//     }
//
// } */
//
//$( "#draggable" ).draggable();
//$( "#droppable" ).droppable({
//  drop: function() {
//    alert( "dropped" );
//  }
//});
//  
