const submitBtn = document.querySelector('#enviar');
const nomeInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const clearBtn = document.querySelector('#limpar');
const getAll = document.getElementsByTagName('input');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (nomeInput.value.length < 10 || nomeInput.value.length > 40) {
    console.log('Nope');
  }
  if (emailInput.value.length < 10 || emailInput.value.length > 50) {
    console.log('Nope');
  }
});

clearBtn.addEventListener('click', function () {
  for (let item of getAll) {
    item.value = '';
    item.checked = false;
  }
});
