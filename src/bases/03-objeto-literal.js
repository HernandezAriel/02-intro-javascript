const person = {
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    adress: {
        city: 'New York',
        zip: 2233884,
        lat: 14.3232,
        lng: 34.929232,
    }
}

console.log(person);

//No estamos copiando el valor de la misma sino la refencia al espacio en memoria de la variable persona
//const persona2 = persona;
const person2 = { ...person} //con ... copiamos todo del objeto que seleccionemos
persona2.name = 'Peter';

console.log(person);
console.log(person2);