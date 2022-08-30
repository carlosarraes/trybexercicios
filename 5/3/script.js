function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();
const numDaysList = document.querySelector('#days');
const divBtnHoliday = document.querySelector('.buttons-container');

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function fillCalendar() {
  for (let key of decemberDaysList) {
    const day = document.createElement('li');
    day.classList.toggle('day');
    day.innerText = key;
    day.addEventListener('mouseenter', function (e) {
      e.target.style.fontSize = '26px';
    });
    day.addEventListener('mouseleave', function (e) {
      e.target.style.fontSize = '';
    });
    day.addEventListener('click', function (e) {
      const colorDiv = document.querySelector('.task');
      if (
        colorDiv.className === 'task selected' &&
        e.target.style.color === 'green'
      ) {
        e.target.style.color = '';
      } else if (colorDiv.className === 'task selected') {
        e.target.style.color = 'green';
      }
    });
    if (key === 24 || key === 25 || key === 31) {
      day.classList.toggle('holiday');
    }
    if (key === 4 || key === 11 || key === 18 || key === 25) {
      day.classList.toggle('friday');
    }
    numDaysList.appendChild(day);
  }
}
function holidayColor() {
  const holidays = document.querySelectorAll('.holiday');
  for (let key of holidays) {
    if (key.style.backgroundColor) {
      key.removeAttribute('style');
    } else {
      key.style.backgroundColor = 'white';
    }
  }
}

function isFriday() {
  const saved = [4, 11, 18, 25];
  const fridays = document.querySelectorAll('.friday');

  for (let key in fridays) {
    if (fridays[key].innerText === 'FRIDAY') {
      fridays[key].innerText = saved[key];
    } else {
      fridays[key].innerText = 'FRIDAY';
    }
  }
}
function createHBtn(string) {
  const btn = document.createElement('button');
  btn.id = `btn-${string}`;
  btn.innerText = `${string[0].toUpperCase() + string.slice(1)}s`;
  btn.addEventListener('click', holidayColor);
  divBtnHoliday.appendChild(btn);
}
function createFBtn(string) {
  const btn = document.createElement('button');
  btn.id = `btn-${string}`;
  btn.innerText = `${string[0].toUpperCase() + string.slice(1)}s`;
  btn.addEventListener('click', isFriday);
  divBtnHoliday.appendChild(btn);
}

const taskList = document.querySelector('.task-list');
const btnAdd = document.querySelector('#btn-add');
const taskInput = document.querySelector('#task-input');

taskInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (taskInput.value) {
      const inputValue = document.createElement('h4');
      inputValue.innerText = taskInput.value;
      taskList.appendChild(inputValue);
    } else {
      console.log('vazio');
    }
  }
});

btnAdd.addEventListener('click', function (e) {
  if (taskInput.value) {
    const inputValue = document.createElement('h4');
    inputValue.innerText = taskInput.value;
    taskList.appendChild(inputValue);
  } else {
    console.log('vazio');
  }
});

function createTask(string) {
  const myTask = document.querySelector('.my-tasks');
  const projectSpan = document.createElement('span');
  const colorDiv = document.createElement('div');
  colorDiv.classList.toggle('task');
  colorDiv.addEventListener('click', function (e) {
    e.target.classList.toggle('selected');
  });
  colorDiv.style.backgroundColor = string;
  projectSpan.innerText = 'Projeto';
  myTask.appendChild(projectSpan);
  myTask.appendChild(colorDiv);
}

createTask('green');
fillCalendar();
createHBtn('holiday');
createFBtn('friday');
