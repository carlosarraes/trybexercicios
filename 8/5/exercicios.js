//! -------------------------  Exercicio 1 -------------------------
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});

//! ------------------------- Exercicio 2 -------------------------

const sum = (...args) => {
  return args.reduce((prev, curr) => prev + curr, 0);
};

console.log(sum(4, 5, 6));

//! -------------------------  Exercicio 3 -------------------------

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex));
console.log(personLikes(gunnar));

//! -------------------------  Exercicio 4 -------------------------

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (obj) => {
  return obj.filter((person) => person.nationality === 'Australian' && person.bornIn >= 1901 && person.bornIn <= 2000);
};

console.log(filterPeople(people));

//! -------------------------  Exercicio 5 -------------------------

const myList = [5, 2, 3];

const swapList = ([x, y, z]) => [z, y, x];

console.log(swapList(myList));

//! -------------------------  Exercicio 6 -------------------------
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([car, brand, year]) => {
  return { car, brand, year };
};

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));

//! -------------------------  Exercicio 7 -------------------------
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = ({ name, length, measurementUnit }) => {
  return `${name} is ${length} ${measurementUnit} long`;
};

console.log(shipLength(ships[0]));
console.log(shipLength(ships[1]));
console.log(shipLength(ships[2]));

//! -------------------------  Exercicio 8 -------------------------

const greet = (name, greeting = 'hi') => `${greeting} ${name}`;

console.log(greet('John'));
console.log(greet('John', 'Good morning'));
console.log(greet('Isabela', 'Oi'));

//! -------------------------  Exercicio 9 -------------------------

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.

const months = [...yearSeasons.winter, ...yearSeasons.spring, ...yearSeasons.autumn, ...yearSeasons.summer];

console.log(months);
