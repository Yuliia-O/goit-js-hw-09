import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return Promise.resolve(`Fulfilled Promose ${position} in ${delay}ms`).then(
      value => Notify.success(value)
    );
    // Fulfill
  } else {
    return Promise.reject(`Rejected Promose ${position} in ${delay}ms`).catch(
      error => Notify.failure(error)
    );
    // Reject
  }
}

formEl.addEventListener('submit', e => {
  e.preventDefault();

  let callDelay = Number(formEl.elements.delay.value);

  for (let i = 1; i <= formEl.elements.amount.value; i += 1) {
    setTimeout(() => createPromise(i, callDelay), callDelay);
    console.log(callDelay);
    callDelay += Number(formEl.elements.step.value);
  }
});
