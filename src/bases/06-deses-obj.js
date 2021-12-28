//Desestructuracion
//Asignacion Desestructurante

const person = {
    name: 'Tony',
    age: 45,
    keyName: 'IronMan'
};

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({keyName, name, age, range = 'Captain'}) => {
    // console.log(nombre, edad, rango);
    return {
        keyName: keyName,
        ageH: age,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {keyName: keyName, anios: ageH, latlng: {lat, lng}} = useContext(person);

console.log(keyName, ageH);
console.log(lat, lng);

