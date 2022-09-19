const { encode, decode } = require('./cypher');

describe('Teste de encode e decode', () => {
  it('Teste se funcao', () => {
    expect(encode).toEqual(expect.any(Function));
  });
  it('Teste se funcao', () => {
    expect(decode).toEqual(expect.any(Function));
  });

  it('Teste de encode', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('Teste de decode', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('Teste consoantes', () => {
    expect(encode('carro')).toBe('c1rr4');
  });

  it('Teste consoantes', () => {
    expect(encode('carro').length).toBe('c1rr4'.length);
  });

  it('Teste de decode', () => {
    expect(decode('12345').length).toBe('aeiou'.length);
  });
});
