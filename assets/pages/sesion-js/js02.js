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

/* Funciones Callback */

function saludoALosPokemones( ){
    return "Yo te elijo";
}

function eligiendoPokebola( saludo , nombre){
    console.log("Hola, estás en la liga pokemon");
    console.log("Elige a tu mejor Pokemon");
    console.log(saludo(nombre));
}

eligiendoPokebola(saludoALosPokemones);

console.log(saludoALosPokemones);

// eligiendoPokebola(function(nombre){
//     return "Pika Pika Chu  " + nombre;
// },"cubone"); 

eligiendoPokebola( nombre => "Soy " + nombre,"cubone");

/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.

 student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
student2Courses = ["Geography", "Spanish", "Programming", "Music"];

  salida: "Cursos en común: Programming, Music"
*/

student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
student2Courses = ["Geography", "Spanish", "Programming", "Music"];


function cursosEnComun ( student1Courses , student2Courses ){
    const commonCourses = [];
    
    for (let i = 0; i < student1Courses.length; i++) {
        for (let j = 0; j < student2Courses.length; j++) {
            if( student1Courses[i] === student2Courses[j] ){
                commonCourses.push(student1Courses[i]);
            }
        }
    }
    return `Cursos en común ${commonCourses}`;
}

console.log(cursosEnComun(student1Courses,student2Courses));


//Resolviendo con filter e include

function getCommonCoursesWithFilter( student1Courses , student2Courses ){
    return student1Courses.filter( course=>  student2Courses.includes(course) );
}

console.log( getCommonCoursesWithFilter(student1Courses, student2Courses) );
//Contar la cantidad de caracteres de una frase

//"peso pluma pica papas con un pico y una pala con un pico pica papas peso pluma"
//split, filter
console.log("###############################################################");

function contarCaracteres( cadena ){
    cadena = cadena.split("");

    return cadena.reduce( function( accumulator , value ){ return value != " " ? accumulator + 1 : accumulator } , 0 );
}

const cadena = "peso pluma pica papas con un pico y una pala con un pico pica papas peso pluma";
console.log(`Número de caracteres: ${contarCaracteres(cadena)}`);


const phasePP = "a peso pluma pica papas con un pico y una pala con un pico pica papas peso pluma";
const counterCharacter = ( phase, character ) => phase.toUpperCase().split(character.toUpperCase()).length-1;

console.log(`Cantidad de letras 'p' : ${ counterCharacter(phasePP, "p") } `); // 13

// console.log(phasePP.split("p"))

// -------------- Recursividad ---------------------
/*
  Una función recursiva es una función que se llama así misma durante su ejecución.

  Se utilizan en algoritmos y soluciones que se basan en la división y conquista
  como cálculos matemáticos, recorrido de estructura de datos y algoritmos de búsqueda
  y ordenamiento.

  Patrón:
    function nombreFuncionRecursiva( parametro  ){
        if( condicionParo){
            return expresión;
        }
        else {
            // llamada recursiva
            nombreFuncion( nuevoParametro );
        }
    }
*/

console.log("###############################################################");

function factorialConCicloFor( numero ){
    let resultadoFactorial = 1;

    for( let i = 2; i <= numero ; i++ ){
        resultadoFactorial *= i;
    }

    return resultadoFactorial;
}

console.log( "Resultado del cálculo factorial de un número: " + factorialConCicloFor( 5 ) );

function factorialConRecursividad( numero ){
    if ( numero === 1 || numero === 0 ) {
        return 1;
    }else{
        return numero * factorialConRecursividad( numero - 1 );
    }
}

// function factorialConRecursividad( numero ){
//     if ( numero <= 0 ) {
//     return 1;
//     } else {

//   return numero * factorialConRecursividad( numero -1 );
//     }
//     }
    
//     console.log(`El factorial recursivo de 5 es: 
//     ${factorialConRecursividad(0)}`);

console.log( "Resultado del cálculo factorial de un número Recursivo: " + factorialConRecursividad( 5 ) );

// -------------- Saludar con recursividad ---------------------
/*
 Generar una función recursiva que muestre en consola un saludo
 donde se indique el número saludo desado

 ej: saludar 10 veces

  Saludo 1
  Saludo 2
  Saludo 3
   ....
  Saludo 9
  Saludo 10

*/
console.log("###############################################################");

function saludo1( numeroSaludo , numero ) {
    if(  numeroSaludo === numero)
        console.log("Saludo " + numeroSaludo );
    else
        console.log("Saludo " + numeroSaludo ) +  saludo1( numeroSaludo+1 , numero );
}

saludo1(1,30);

console.log("###############################################################");
