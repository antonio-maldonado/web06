console.log("Ni perdón ni olvido");

const arreglo = [["a","b"],["c","d"]]

console.log(arreglo.flat().filter(value => value=="d"))
arreglo[1].splice(1,1,"bryan")
console.table(arreglo)
const personasEnCh30 = [ 
    [ "Luis", "Allan" , "Anneth"  , "Maryluz" ,"Marifer" , "Leo"    , "Alejandro" ] ,  /*indice 0, ByteMe(404) */
    [ "Ed"  , "Jimena", "Marifer" , "Leo"    , "Alejandro" ] ,  /* indice 1, PerryCode */
    [ "Lu"  , "Leo"   , "Daniel"  , "Gina"    ]    /* indice 2, BugBusters */
];

console.log(`Integrantes de BugBusters: ${ personasEnCh30[2] }`); // Lu,Leo,Daniel,Gina
console.log(`Integrantes de BugBusters: ${ personasEnCh30[2].join(", ") }`); // Lu, Leo, Daniel, Gina
                                                     // Feliz Cumpleaños
console.log(`BugBusters integrante n. 1: ${ personasEnCh30[2][0] }`); // Lu

// En la historia Leo tiene exceso de amonestaciones.
// Hay que reemplazar el nombre de Leo en PerryCode por Bryan.

// personasEnCh30[1][3] = "Brayan";
// personasEnCh30[1].splice(3, 1, "Brayan");
// console.table( personasEnCh30 ); 


// ------------- Iterando todos los elementos

// for (let equipo = 0; equipo < personasEnCh30.length /*filas*/; equipo++) {

//         console.table( personasEnCh30[ equipo ] );        
// }

// for(const value of personasEnCh30){
//     for( const persona of value ){
//         console.log( persona );
//     }
// }
console.log("###########################################################")

function iterarEquipos( equipo, indice, arreglo ){
    console.log(`Indice ${indice}: ${equipo}`);
    equipo.forEach( iterarPersonas );
    // return equipo;
}

function iterarPersonas( persona, indice, arreglo ){
    console.log(`Indice ${indice}: ${persona}`);
    // return persona;
}

console.log(personasEnCh30.forEach( iterarEquipos ) );

console.log("###########################################################");
const myPet = "Kraken";
for (const character of myPet  ){
    console.log( character );
}

console.log("###########################################################");
// Refactoriza lo anterior con forEach
myPet.split("").forEach( character => console.log( character ));

console.log("###########################################################");
const tablaMultiplicarX = 5;
const tablaMultiplicarY = 10;

rompeCiclo:
for(let i = 1; i <= tablaMultiplicarX; i++){
    for(let j = 1; j <= tablaMultiplicarY; j++ ){
        console.log( `${i} x ${j} = ${i*j}`);
        if( j === 4 && i === 2 ) break rompeCiclo;
    }
    console.log("");
}

console.log("###########################################################");
console.log("===== Uso de continue con tag =======")
// Realizar la multiplicación hasta el  3
// 1*1, 1*2, 1*3 ..... 2*3... 5*3
continuaCicloSuperior: 
for (let i = 1; i <= 5; i++) {    
    for (let j = 1; j <= 10; j++) {
        if ( j > 3 ) continue continuaCicloSuperior;
        console.log(`${i} * ${j} = ${ i * j }`);        
    }    
}
