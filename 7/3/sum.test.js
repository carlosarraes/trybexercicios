const sum = require('./sum');

test('Teste de soma', () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(4, 50)).toBe(54);
  expect(sum(0, 0)).toBe(0);
});

test('Teste se o retorno Error', () => {
  expect(() => sum(4, '5')).toThrow();
  expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
});
