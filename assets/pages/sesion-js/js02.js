console.log("Sesión JS02 uso de funciones");

/*
    funciones declaradas
    (function declariation, function statement)

    Una característica de las funciones declaradas es que tienen hoisting
    hoisting: comportamiento en JS que permite a las declaraciones de variables(var)
    o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/


function multiplica( a , b ){
    return a * b;
}

console.log(multiplica(4,3));

const sum = function sumatoria(a,b){
    return a + b;
}

console.log("El resultado de 4 + 2 = " + sum(4,2));

let saludo;
const localidad = "buenos aires";

if(localidad == "buenos aires"){
    saludo = function ( name ){
        return `Holis ${name}`;
    }
}else{
    saludo = function ( name ){
        return `Buenos días ${name}`
    }
}

console.log(saludo("tony"));

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/



(function( name ){
    console.log(`Me llamo ${name} y me autoinvoco`)
})("CHATGPT");


const areaRectangulo = ( base, altura) =>  base * altura 


console.log(`El área es: ${ areaRectangulo(3, 9)}`);

//Función flecha que realice el área de un triángulo

/**
 * 
 * @param {*} base 
 * @param {*} altura 
 * @returns 
 */
const areaTriangulo = (base=1, altura=1) => base * altura / 2;

console.log("El área del triangulo es: " + areaTriangulo(3.13,2));

const sumatoriaMultiplesNumeros = (a=0,b=0, ...rest)=>{
    let suma = a + b;
     
    return rest.reduce((suma,value)=>suma+value,suma);
}
console.log(`Sumatoria de múltiples números: ${sumatoriaMultiplesNumeros(2,5)}`);

console.log(`Sumatoria de múltiples números: ${sumatoriaMultiplesNumeros(2,5,10,9,20,10)}`);
console.log(`Sumatoria de múltiples números: ${sumatoriaMultiplesNumeros(2)}`);