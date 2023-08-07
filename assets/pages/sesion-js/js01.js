console.log("Bienvenido a la sesión JS01");

//Datos primitivos: Number, string, boolean, null, undefined, bigint, symbol
//Datos no primitivos: objects
//Tipos de datos: Primitivos y no primitivos

const stringData = "Holi crayoli";

console.log( stringData )

//tipo de datos: Number: 
//numeros positivos,negativos,decimales,NaN,+Infinity,-Infinity
console.log( `Tipos de datos number: 
${12}, ${-6}, ${0.456}, ${5*'hola'}, ${45/0},${-45/0}` );
console.log(`Valor máximo representable en javascript ${Number.MAX_VALUE}` );
console.log(`Si el valor es mayor a MAX_VALUE como 1.79e310: ${-1.79e310}`);

console.log(`Valor máximo entero seguro en Javascript: ${Number.MAX_SAFE_INTEGER}`)
//Cuando se realizan operaciones que exceden los límites de MAX_SAFE_INTEGER se produce una pérdida de precisión
console.log(`MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1}`)
console.log(`MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2}`)
console.log(`MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3}`)
console.log(`MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4}`)

//tipos de datos BigInt
const myBigInt = 9007199254740991n;
//Sirven para representar valores numéricos enteros, de los que el tipo number no puede representar o no es seguro
console.log(`MAX_SAFE_INTEGER + 1: ${myBigInt + 1n}`)
console.log(`MAX_SAFE_INTEGER + 2: ${myBigInt + 2n}`)
console.log(`MAX_SAFE_INTEGER + 3: ${myBigInt + 3n}`)
console.log(`MAX_SAFE_INTEGER + 4: ${myBigInt + 4n}`)

// se creará una clave privada, esta no se itera con un ciclo, no se almacena LocalStorage
// tipo de dato symbol
// Representa un valor único que se puede utilizar como clave en objetos o identificador único
const mySymbol = Symbol();
const mySymbol2 = Symbol();
const myKey = "codigo";
console.log(`mySymbol === mySymbol2   ${ mySymbol === mySymbol2} `);

const myObj = {
    clave : "valor",
    [mySymbol] : 16, // se creará una clave privada, esta no se itera con un ciclo, no se almacena LocalStorage
    myKey : 123,
    [myKey] : 567, 
}
console.log( myObj );

const cancionesCh30 = ["Highway Star", "Trouble","Saoko","Rock Dj"];

const misDatosDePerfil = {
    name : "Antonio",
    lastName: "Maldonado",
    age: 25,
    isBelico:false,
    fullName: function(){
        return `Nombre completo de Tony: ${this.name} ${this.lastName}`
    },
    fullNameMayusculas: function(){
        return `Nombre completo de Tony: ${ this.name.toUpperCase()} ${this.lastName.toUpperCase()}`
    }
}

console.log(misDatosDePerfil.fullName())
console.log(misDatosDePerfil.fullNameMayusculas());

const colorVerde = 0x008000;
console.log(colorVerde.toString(16));
console.log(colorVerde.toString(16).padStart(6,"0"));

const myAgeTxt = "25";
const sumatoria = 10 + Number(myAgeTxt);

console.log(sumatoria)

console.log(parseInt(("$123 - 456").slice(1)))
