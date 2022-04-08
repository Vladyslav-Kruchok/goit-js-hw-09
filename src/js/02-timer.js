/*
Напиши скрипт таймера, який здійснює зворотний відлік до певної дати.
Такий таймер може використовуватися у блогах та інтернет-магазинах, сторінках реєстрації подій, під час технічного обслуговування тощо.
*/
//#region Import #
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Ukrainian } from 'flatpickr/dist/l10n/uk';
import { showUi } from './helpers/ShowUi';
import { ref } from './helpers/Ref';
import { StartTimer } from './class/StartTimer'
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
            window.alert(`Please choose a date in the future, current date is ${new Date().toString()}`);
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