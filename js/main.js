'use strict';
const list = document.querySelector('.list');

const del = () => {
  list.lastChild.remove();
  createList();
};

const clear = () => {
  list.innerHTML = '';
  createList();
};

const exit = (newLiElemText) => {
  const newLiElem = document.createElement('li');
  newLiElem.textContent = newLiElemText;
  list.append(newLiElem);
  createList();
};

const createList = () => {
  const newLiElemText = prompt('Добавьте строку в список');
  if (newLiElemText === 'del') {
    del();
  } else {
    if (newLiElemText === 'clear') {
      clear();
    } else {
      if (newLiElemText.trimStart() === '') {
        createList();
      } else {
        if (newLiElemText !== null && newLiElemText !== 'exit') {
          exit(newLiElemText);
        }
      }
    }
  }
};

createList();
