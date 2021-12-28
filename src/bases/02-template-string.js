const name = 'Ariel';
const lastName = 'Hernandez';

const fullName = `${name} ${lastName}`;

console.log(fullName);

function getSaludo(name) {
    return 'Hey ' + name;
}

console.log(`This is a text: ${getSaludo(name)}`)