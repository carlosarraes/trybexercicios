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

// Adicione o código do exercício aqui:
function year1947(arr) {
  const found = arr.find((book) => book.author.birthYear === 1947);
  return found.author.name;
}

console.log(year1947(books)); // Primeiro

function shorterBook(arr) {
  let bookLength;
  let bookName = '';
  arr.forEach((book) => {
    if (bookLength) {
      bookName = book.name.length < bookLength ? book.name : bookName;
      bookLength = book.name.length < bookLength ? book.name.length : bookLength;
    } else {
      bookName = book.name;
      bookLength = book.name.length;
    }
  });
  return bookName;
}

console.log(shorterBook(books)); // Segundo

function book26(arr) {
  const found = arr.find((book) => book.name.length === 26);
  return found.name;
}

console.log(book26(books)); // Terceiro

books.sort((a, b) => b.releaseYear - a.releaseYear);

console.log(books); // Quarto

function checkAge(year) {
  return year.author.birthYear >= 1901 && year.author.birthYear <= 2000;
}

console.log(books.every(checkAge)); // Quinto

function checkDecade(year) {
  return year.releaseYear >= 1980 && year.releaseYear <= 1989;
}

console.log(books.some(checkDecade)); // Sexto

// prettier-ignore
function unico(arr) {
  return arr.every((book) => !arr.some((booka) => booka.author.birthYear === book.author.birthYear && booka.author.name !== book.author.name));
}

console.log(unico(books));
