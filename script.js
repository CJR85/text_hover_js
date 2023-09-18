'use strict';
let text = document.querySelector('.text');
text.innerHTML = text.innerText
  .split('')
  .map((letters, i) => `<span>${letters}</span>`)
  .join('');
