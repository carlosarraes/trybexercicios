const searchEmployee = require('./bonus');

describe('Testa a funcao search', () => {
  it('Checa se a funcao existe', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Procura pelo employee 5569-4 q sabe React', () => {
    expect(searchEmployee('5569-4', 'React')).toBe(
      'George Jobs - Frontend,Redux,React,CSS'
    );
  });

  it('Procura pelo employee 5569-4 q sabe Backend', () => {
    expect(searchEmployee('5569-4', 'Backend')).toBe('Informação indisponível');
  });

  it('Procura pelo employee 5569-4-2 q nao existe', () => {
    expect(searchEmployee('5569-4-2', 'React')).toBe('ID não identificada');
  });
});
