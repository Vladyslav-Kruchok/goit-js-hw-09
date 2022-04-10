/**
 * + Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів, скільки ввели в поле amount. Під час кожного виклику передай їй номер промісу (position), що створюється, і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).
 * + Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується або відхиляється через delay часу. Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay зі значеннями однойменних параметрів. Використовуй початковий код функції для вибору того, що потрібно зробити з промісом - виконати або відхилити.
 * + Для відображення повідомлень користувачеві, замість console.log(), використовуй бібліотеку notiflix. 
 */
//#region Import #
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createPromise } from './helpers/CreatePromise';
//#endregion #

//#region Ref #
const form = document.querySelector('.form');
//#endregion #

//#region Func #
const msgSucces = (position, delay) =>
{
  const msg = `✅ Fulfilled promise ${position} in ${delay}ms`;
  Notify.success(msg);
  console.log(msg);
};
const msgFailure = (position, delay) =>
{
  const msg = `❌ Rejected promise ${position} in ${delay}ms`;
  Notify.failure(msg);
  console.log(msg);
};
//#endregion #

//#region Main #
form.addEventListener('submit', e => {
  e.preventDefault();

  const { elements: { delay, step, amount } } = e.currentTarget;
  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  console.clear();
  for (let i = 1; i <= Number(amount.value); i++, delayValue += stepValue)
  {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        msgSucces(position, delay);
    })
      .catch(({ position, delay }) => {
        msgFailure(position, delay);
    });
  }
});
//#endregion #