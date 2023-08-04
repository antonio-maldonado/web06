console.log("Página en construccion con Patricio Estrella")

function clickPatricio(){
    alert("¿La mayonesa es un instrumento? ")
}

function changeColor( elementHTML , color ){
    // alert("Voy a cambiar mi color");

    elementHTML.style.color = color;
}

function changeTextOfUserColor( element , color ){
    element.innerHTML = "<h3>Ahora soy: <em>" + color + "</em></h3>";
}

function resetColor (  ){
    // const colores = document.querySelectorAll("footer h3");
    // colores.forEach(value => value.style.color = "black");
    const refRedColor = document.getElementById( "red-color" );
    const refGreenColor = document.getElementById( "green-color" );
    const refPurpleColor = document.getElementById( "purple-color" );
    const refUserColor = document.getElementById( "user-color" );

    changeColor(refRedColor,"black");
    changeColor(refGreenColor,"black");
    changeColor(refPurpleColor,"black");
    changeColor(refUserColor,"black");
    changeTextOfUserColor( refUserColor , "black" )
}

function changeColorPrompt( elementHTML ) {
    const colorPicked = prompt("Escribe el color que quieres");
    // elementHTML.textContent = "ahora soy: " + colorPicked;
    // elementHTML.style.fontStyle = "italic";

    elementHTML.innerHTML = "<h3>Ahora soy: <em>" + colorPicked + "</em></h3>";
    changeColor( elementHTML , colorPicked );
}

