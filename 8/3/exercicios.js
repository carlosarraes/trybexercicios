const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function formatedBookNames(obj) {
  return obj.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}

console.log('Ex1: ', formatedBookNames(books));

function nameAndAge(obj) {
  const newObj = obj.map((person) => ({ age: 2022 - person.author.birthYear, author: person.author.name }));
  return newObj.sort((a, b) => a.age - b.age);
}

console.log('Ex2: ', nameAndAge(books));

function fantasyOrScienceFiction(obj) {
  return obj.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
}

console.log('Ex3: ', fantasyOrScienceFiction(books));

function oldBooksOrdered(obj) {
  return obj.filter((book) => 2022 - book.releaseYear > 60).sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log('Ex4: ', oldBooksOrdered(books));

function fantasyOrScienceFictionAuthors(obj) {
  const newObj = obj
    .filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
    .map((book) => book.author.name)
    .sort((a, b) => (b < a ? 1 : -1));
  return newObj;
}

console.log('Ex5: ', fantasyOrScienceFictionAuthors(books));

function oldBooks(obj) {
  const newObj = obj.filter((book) => 2022 - book.releaseYear > 60).map((book) => book.name);
  return newObj;
}

console.log('Ex6: ', oldBooks(books));

function authorWith3DotsOnName(obj) {
  const newObj = obj.find((book) => book.author.name.split('.').length - 1 === 3);
  return newObj.name;
}

console.log('Ex7: ', authorWith3DotsOnName(books));
