let listaAmigos = []; //Variable donde se almacenan los nombres
let resultado = document.getElementById("resultado")
let lis = document.getElementById("listaAmigos")// con document.getElementById() selecciono la lista donde se mostrara 
let sorteo = 0;

function agregarAmigo(){ // funcion que permite al usuarion ingresar un nombre y almacenarlo
    let nombreIngresado = document.getElementById("amigo").value;//captura el campo de entrada utilizanso document.getElementById
  
    if (nombreIngresado.trim() === ""){ //Implementar una validación para asegurarse de que el campo no esté vacío
        alert("Por favor, inserte un nombre.")// Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
      }else {
        listaAmigos.push(nombreIngresado);//Si el valor es válido, añadirlo al arreglo que almacena método.push()
        console.log(listaAmigos);
        console.log(listaAmigos.length);
        listaIngresada(listaAmigos);

   }
   document.getElementById("amigo").value = ""; // Limpia el campo de texto
}

 function listaIngresada(elemento){//funcion que recorre el array y lo agrega a una lista 
    
    
    lis.innerHTML = "";
    elemento.forEach(elemento => { //con el forEach recorro el arreglo y lo voy poniendo en la lista 
      lis.innerHTML += `<li>${elemento}</li>`;
    });


}

function listAmigo(elemento){ // funciion que selecciona de manera eleatoria el nombre almacenado
  
  
  if (listaAmigos.length > 0){ //Antes de sortear, comprobar si el array amigos no está vacío. */
    sorteo = Math.floor(Math.random()* elemento.length)/*Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo. */
    console.log(sorteo);

     if (elemento.includes(sorteo) === true ){
      resultado.innerHTML += `<li>${elemento}</li>`;
      console.log(resultado)
    
    }
  }
  

  
     /*Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo. */

    /*Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando 
       document.getElementById()  e innerHTML para mostrar el amigo sorteado. */
}


function sortearAmigo(){
  listAmigo(listaAmigos)
}

   
    
    
        
