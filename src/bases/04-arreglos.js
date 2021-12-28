//Arreglos en JS
//const arreglo = new Array();
const array = [1,2,3,4];
//No se recomienda push porque modifica el arreglo princiapl
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let array2 = [...array, 5];

//Recorre todos los valores del arreglo, reliza una operacion y retorna el valor
const array3 = array2.map(function(number) {
    return number * 2;
});


console.log(array);
console.log(array2);
console.log(array3);