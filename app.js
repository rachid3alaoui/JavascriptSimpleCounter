const counter = document.querySelector('span');

const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');

increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);

// Reset counter

function reset() {
  counter.innerText = '0';
  counter.style.color = 'black';
}

// Increase value
function increase() {
  let value = Number(counter.innerHTML);
  value++;
  if (value > 0) {
    counter.style.color = 'green';
  } else if (value == 0) {
    counter.style.color = 'black';
  }
  counter.innerHTML = value;
}

function decrease() {
  let value = Number(counter.innerHTML);
  value--;
  if (value < 0) {
    counter.style.color = 'red';
  } else if (value == 0) {
    counter.style.color = 'black';
  }
  counter.innerHTML = value;
}
