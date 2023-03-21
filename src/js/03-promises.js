import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      return Promise.resolve(
        `Fulfilled Promise ${position} in ${delay}ms`
      ).then(value => Notify.success(value));
      // Fulfill
    } else {
      return Promise.reject(`Rejected Promise ${position} in ${delay}ms`).catch(
        error => Notify.failure(error)
      );
      // Reject
    }
  }, delay);
}

formEl.addEventListener('submit', e => {
  e.preventDefault();

  let callDelay = Number(formEl.elements.delay.value);

  for (let i = 1; i <= formEl.elements.amount.value; i += 1) {
    createPromise(i, callDelay);
    callDelay += Number(formEl.elements.step.value);
  }
});
