// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array global 
const amigos = [];

/**Función "Añadir".*/
function agregarAmigo() {
    // Obtenemos el valor del input
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); 

    // Validamos que no esté vacío
    if (nombre === "") {
        alert("Por favor escribe un nombre válido.");
        return;
    }
    // Agregamos el nombre al arreglo
    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}
/*** Función que recorre el array  y también limpia la lista.*/
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
/*** Función que selecciona un nombre aleatorio y lo muestra */
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Agrega al menos un amigo antes de sortear.</li>";
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = `Feliciades <li>${nombreSorteado} ha sido el amigo secreto seleccionado </li>`;
}
