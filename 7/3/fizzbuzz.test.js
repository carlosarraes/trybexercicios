const myFizzBuzz = require('./fizzbuzz');

test('Testa a funcao fizzbuzz', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
  expect(myFizzBuzz(9)).toBe('fizz');
  expect(myFizzBuzz(25)).toBe('buzz');
  expect(myFizzBuzz(7)).toBe(7);
  expect(myFizzBuzz('7')).toBe(false);
});
