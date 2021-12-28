const characters = ['Goku', 'Vegeta', 'Gohan'];

const [ , ,p3] = characters;

console.log(p3);

const returnArray = () => {
    return ['ABC', 123];
}

const [letters, numbers] = returnArray();
console.log(letters, numbers);

const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hello World') } ];
}

const [ name, setName ] = useState( 'Goku' );

console.log( name );
setName();