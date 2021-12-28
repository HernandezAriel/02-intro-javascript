//Funciones en JS
const greet = function (name) {
    return `Hey, ${name}`;
}

const greet2 = (name) => {
    return `Hey, ${name}`;
}
// saludar = 30;

//Si el cuerpo de la funcion solo tiene una linea
const greet3 = (name) => `Hey, ${name}`;
const greet4 = () => `Hello World`;

console.log(greet('Ariel'));
console.log(greet);
console.log(greet2('Cynad'));
console.log(greet2('Claudio'));
console.log(greet4());


const getUser = () => ({
    uid: 'ABC123',
    username: 'user1302'
});

const user = getUser();
console.log(user);


const getActiveUser = (name) => ({
    uid: 'ABC567',
    username: name
});


const activeUser = getActiveUser('Ariel');
console.log(activeUser);