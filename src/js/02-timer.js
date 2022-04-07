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
        const currentDate = options.defaultDate; 
        
        if (selectedDate < currentDate)
        {
            window.alert('Please choose a date in the future');
            return;
        }

        ref.startBtn.disabled = false;
        ref.startBtn.addEventListener('click', e =>
        {
            ref.startBtn.disabled = true;
            timer.start(flatpickr.compareDates(selectedDate, currentDate, false));
        });
    },
};
//#endregion #

//#region Main #
ref.startBtn.disabled = true;
const timer = new StartTimer({show: showUi}, ref);
flatpickr(ref.idDatePickr, options);
//#endregion #