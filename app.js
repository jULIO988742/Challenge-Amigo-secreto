let listaAmigos = []; //Variable donde se almacenan los nombres

/*Desarrolla una función, que permita al usuario ingresar un nombre en el 
campo de texto y añadirlo a la lista de amigos creada anteriormente. */
function agregarAmigo(){
/*Capturar el valor del campo de entrada: Utilizar document.getElementById 
 o document.querySelector para obtener el texto ingresado por el usuario. */
    let nombreIngresado = document.getElementById("amigo").value;
/*Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. 
 Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre." */
    if (nombreIngresado.trim() === ""){
        alert("Por favor, inserte un nombre.")
    }else {
        /*Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena 
        los nombre de amigos usando el método.push(). */
        listaAmigos.push(nombreIngresado)
        console.log(listaAmigos);
        console.log(listaAmigos.length);

   }
   /*Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto 
   a una cadena vacía. */
   document.getElementById("amigo").value = ""; // Limpia el campo de texto
}




   
    
    
        
