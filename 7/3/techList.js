function techList(array, name) {
  if (array.length < 1) return 'Vazio!';
  const objList = [];
  const sortedArray = array.sort();
  for (let i = 0; i < sortedArray.length; i += 1) {
    const objEntry = {
      tech: sortedArray[i],
      name,
    };
    objList.push(objEntry);
  }

  return objList;
}

module.exports = techList;
