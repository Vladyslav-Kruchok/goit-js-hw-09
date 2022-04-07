import { convertMs } from '../helpers/ConvertMs';
export class StartTimer
{
    timeStep = null;
    intervalId = null;
    isActive = null;
    show = null;
    ref = null;

    constructor({show}, ref)
    {
        this.timeStep = 1000;
        this.intervalId = null;
        this.isActive = false;
        this.show = show;
        this.ref = ref;
    }

    start(differentMS)
    {
        //check timer if it run
        if (this.isActive)
        {
            return;
        }

        //run timer
        let iterStep = differentMS;
        this.isActive = true;
        this.intervalId = setInterval(() =>
        {
            iterStep -= this.timeStep;
            const result = convertMs(iterStep);
            if (iterStep <= 0)
            {
                this.stop();
                return;
            }
            this.show(result, this.ref);
        }, this.timeStep);
    };
    stop()
    {
        clearInterval(this.intervalId);
        this.isActive = false;
    };
}