/*
+Напиши скрипт таймера, який здійснює зворотний відлік до певної дати.
Такий таймер може використовуватися у блогах та інтернет-магазинах, сторінках реєстрації подій, під час технічного обслуговування тощо.
+Використовуй бібліотеку flatpickr для того, щоб дозволити користувачеві кросбраузерно вибрати кінцеву дату і час в одному елементі інтерфейсу. 
+Метод onClose() з об'єкта параметрів викликається щоразу під час закриття елемента інтерфейсу, який створює flatpickr. Саме у ньому варто обробляти дату, обрану користувачем. 
+Натисканням на кнопку «Start» скрипт повинен обчислювати раз на секунду, скільки часу залишилось до вказаної дати, і оновлювати інтерфейс таймера, показуючи чотири цифри: дні, години, хвилини і секунди у форматі xx:xx:xx:xx.
+Для підрахунку значень використовуй готову функцію convertMs, де ms - різниця між кінцевою і поточною датою в мілісекундах.
+Якщо таймер запущений, для того щоб вибрати нову дату і перезапустити його - необхідно перезавантажити сторінку.
+Для відображення повідомлень користувачеві, замість window.alert(), використовуй бібліотеку notiflix.
*/
//#region Import #
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Ukrainian } from 'flatpickr/dist/l10n/uk';
import { showUi } from './helpers/ShowUi';
import { ref } from './helpers/Ref';
import { StartTimer } from './class/StartTimer';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//#endregion #

//#region Setup #
const options = {
    locale: {
        ...Ukrainian,
        firstDayOfWeek: 1
    },
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates)
    {
        let selectedDate = selectedDates[0];
        const currentDate = new Date(); 
        
        if (selectedDate < currentDate)
        {
            Notify.failure(`Please choose a date in the future, current date is ${new Date().toString()}`);
            return;
        }

        ref.startBtn.disabled = false;
        ref.startBtn.addEventListener('click', e =>
        {
            const timer = new StartTimer({show: showUi}, ref);
            ref.startBtn.disabled = true;
            ref.inputDatePickr.disabled = true;
            timer.start(flatpickr.compareDates(selectedDate, currentDate, false));
        });
    },
};
//#endregion #

//#region Main #
ref.startBtn.disabled = true;
flatpickr(ref.idDatePickr, options);
//#endregion #