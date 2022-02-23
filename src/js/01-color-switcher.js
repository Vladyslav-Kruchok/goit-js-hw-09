/*
+Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення,
+використовуючи інлайн стиль.
+Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів.
+Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).
+Для генерування випадкового кольору використовуй функцію getRandomHexColor.
*/

//#region import #
import { getRandomHexColor } from './helpers/RandomHexColor'
import { backgroundColorRnd } from './helpers/AddColor'
import { switcher } from './helpers/Disable'
//#endregion #

//#region variable #
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
stopBtn.disabled = true;
const _body = document.body;
let timerId = null;
//#endregion #

//#region main #
startBtn.addEventListener('click', e => { 
    e.preventDefault();
    //set timer
    timerId = setInterval(() => {
        //set to body color
        backgroundColorRnd(_body, getRandomHexColor());
    }, 1000);
    switcher(e.target, stopBtn);
});

stopBtn.addEventListener('click', e => { 
    clearInterval(timerId);
    switcher(e.target, startBtn);
});
//#endregion #