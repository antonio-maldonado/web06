console.log("JS03");

let firstname = "Antonio";
const lastname = "Torres";
var age = "30";
{
    let firstname = "Antonio";
    const lastname = "Torres";
    var age = "25";
    console.log(`${firstname} ${lastname}`);
    console.log( age );
}

console.log(`${firstname} ${lastname}`);
console.log( age );

console.log("###############################################################");

const temperatura = 30;
let mensaje = "Temperatura";

if( temperatura === 22 ){
    mensaje += ` ${temperatura} grados centigrados es ideal` ;
}else if( temperatura >= 15 && temperatura <= 21 ){
    mensaje += ` ${temperatura} grados centigrados es heladez` ;
}else if( temperatura >= 23 && temperatura <= 30 ){
    mensaje += ` ${temperatura} grados centigrados es calurosa` ;
}

console.log( mensaje );

//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/

const estacionSwitch = ( numeroMes ) => {
    let estacion = "La estación es: ";
    switch ( parseInt( numeroMes ) ){
        case 1:
        case 2:
        case 12:
            estacion += "Invierno";
            break;
        case 3:
        case 4:
        case 5:
            estacion += "Primavera";
            break;
        case 6:
        case 7:
        case 8:
            estacion += "Verano";
            break;
        case 9:
        case 10:
        case 11:
            estacion += "Otoño";
            break;
        default:
            estacion += "Inválido";
    }

    alert( estacion );
}

const estacionIfElse = ( numeroMes) => {
    let estacion = "La estación es: ";

    numeroMes = parseInt(numeroMes);

    if( numeroMes === 1  || numeroMes === 12 || numeroMes === 2){
        estacion += "Invierno";
    }else if( numeroMes === 3  || numeroMes === 4 || numeroMes === 5 ){
        estacion += "Primavera";
    }else if( numeroMes === 6  || numeroMes === 7 || numeroMes === 8 ){
        estacion += "Verano";
    }else if( numeroMes === 9  || numeroMes === 10 || numeroMes === 11 ){
        estacion += "Otoño";
    }else{
        estacion += "Inválido";
    }

    alert( estacion );
}

const numeroEstacion = 7;

console.log("###############################################################");

console.log( estacionSwitch( prompt("Ingrese el numero de mes") ) );
console.log( estacionIfElse( prompt("Ingrese el numero de mes")  ) );
