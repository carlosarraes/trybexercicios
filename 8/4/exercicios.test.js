const {
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
} = require('./exercicios');

describe('Transforma matriz em array', () => {
  it("Espera: ['1', '2', '3', true, 4, 5, 6]", () => {
    expect(flatten([['1', '2', '3'], [true], [4, 5, 6]])).toEqual(['1', '2', '3', true, 4, 5, 6]);
  });
});

describe('Crie uma string com os nomes de todas as pessoas autoras.', () => {
  it("Espera: 'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.'", () => {
    expect(reduceNames(books)).toBe(
      'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.'
    );
  });
});

describe('Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.', () => {
  it('Espera: 43', () => {
    expect(averageAge(books)).toBe(43);
  });
});

describe('Encontre o livro com o maior nome.', () => {
  it('Espera: Livro com ID 1', () => {
    expect(longestNamedBook(books)).toEqual({
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991,
    });
  });
});

describe('Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.', () => {
  it('Espera: 20', () => {
    expect(containsA(names)).toBe(20);
  });
});

describe('criar um novo array de objetos a partir das informações de students e grades, onde cada objeto desse novo array terá o formato { name: nome do aluno, average: media das notas }', () => {
  it('Espera: Espera 3 objs com nome e avg', () => {
    expect(studentAverage(students, grades)).toEqual([
      { name: 'Pedro Henrique', average: 7.8 },
      { name: 'Miguel', average: 9.2 },
      { name: 'Maria Clara', average: 8.8 },
    ]);
  });
});
