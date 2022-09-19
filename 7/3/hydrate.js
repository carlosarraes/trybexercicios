function hydrate(str) {
  const nums = str.match(/\d+/g);
  let contador = 0;

  for (let num of nums) {
    contador += +num;
  }

  if (contador == 1) return `${contador} copo de água`;

  return `${contador} copos de água`;
}

module.exports = hydrate;
