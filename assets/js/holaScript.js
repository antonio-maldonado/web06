
function cambiarNombre(){
    const h1Nombre = document.getElementById("h1-nombre");
    const nuevoNombre = prompt("Escribe tu nombre");

    h1Nombre.textContent = "Hola " + nuevoNombre;
}