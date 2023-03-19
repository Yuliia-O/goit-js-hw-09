import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

const fp = flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', startTimer);

function startTimer() {
  startBtn.disabled = true;
  const timerId = setInterval(() => {
    const pickedDate = fp.selectedDates[0].getTime();
    const currentDate = Date.now();
    const distance = pickedDate - currentDate;

    if (distance < 0) {
      clearInterval(timerId);
      startBtn.disabled = false;
      return;
    }
    const convertedDistance = convertMs(distance);
    daysEl.textContent = convertedDistance.days;
    hoursEl.textContent = convertedDistance.hours;
    minutesEl.textContent = convertedDistance.minutes;
    secondsEl.textContent = convertedDistance.seconds;
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
