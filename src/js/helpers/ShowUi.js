import { padStart } from './PadSrart';
export const showUi = ({ days, hours, minutes, seconds }, ref) =>
{
    ref.dataDays.textContent = `${padStart(days)}`;
    ref.dataHours.textContent = `${padStart(hours)}`;
    ref.dataMinutes.textContent = `${padStart(minutes)}`;
    ref.dataSeconds.textContent = `${padStart(seconds)}`;
};