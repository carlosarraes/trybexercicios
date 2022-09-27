const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten(matrix) {
  return matrix.reduce((prev, curr) => prev.concat(curr), []);
}

console.log(flatten(arrays));

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

function reduceNames(obj) {
  const result = obj.reduce((prev, curr) => (prev ? `${prev}, ${curr.author.name}` : curr.author.name), '');
  return `${result}.`;
}

console.log(reduceNames(books));

function averageAge(obj) {
  return obj.reduce((prev, curr) => prev + (curr.releaseYear - curr.author.birthYear), 0) / obj.length;
}

console.log(averageAge(books));

function longestNamedBook(obj) {
  return obj.reduce((prev, curr) => (prev.name.length > curr.name.length ? prev : curr));
}

console.log(longestNamedBook(books));

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA(arr) {
  return arr.reduce((prev, curr) => prev + (curr.split('a').length - 1) + (curr.split('A').length - 1), 0);
}

console.log('ex5: ', containsA(names));

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage(stnd, grds) {
  const avgGrd = grds.map((array) => array.reduce((prev, curr) => prev + curr, 0) / array.length);
  const report = stnd.map((student, index) => ({ name: student, average: avgGrd[index] }));
  return report;
}

console.log(studentAverage(students, grades));

module.exports = {
  flatten,
  reduceNames,
  averageAge,
  longestNamedBook,
  containsA,
  studentAverage,
  names,
  books,
  grades,
  students,
};
