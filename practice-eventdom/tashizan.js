let left = document.querySelector('#left');

let right = document.querySelector('#right');

let answer = document.querySelector('#answer');

let button = document.querySelector('#calc');
function calc() {
  let a = Number(document.querySelector('#left').value);
  let b = Number(document.querySelector('#right').value);
  document.querySelector('#answer').textContent = a + b;
}
let bo = document.querySelector('button#calc');
bo.addEventListener('click', calc);