
// Stop Watch using JS objects

function StopWatch()
{
    let startTime, running = 0;
    let runner = null; // variable for setInterval

    let stopWatch = document.querySelector('#time');
    let startButton = document.querySelector('.start');
    let stopButton = document.querySelector('.stop');
    let resetButton = document.querySelector('.reset');

    startButton.addEventListener('click', () => this.start());
    stopButton.addEventListener('click', () => this.stop());
    resetButton.addEventListener('click', () => this.reset());

    this.start = function()
    {
        // starts the watch
        if(running)
            throw new Error('Stopwatch has already started.');
        
        running = true;

        startTime = new Date; // capture the current date and time

        runner = setInterval(this.displayTime, 10);
    }

    this.stop = function ()
    {
        // stops the watch
        if(!running)
            throw new Error('Stopwatch is not running');

        running = false;
        //startTime = null;
        clearInterval(runner);
    }

    this.reset = function()
    {
        if(running)
            throw new Error('Cannot reset while running.');
        // resets the time
        startTime = null;
        endTime = null;
        running = false;
        duration = null;
        stopWatch.innerText = '00:00:00.000';
    }

    this.displayTime = function()
    {
        // get the millisecondss from the start time
        let millis, seconds, minutes, hours = 0;
        let hr, min, sec, ms = null;
        
        // Get duration in millisecondss and create time values
        // Math.trunc() removes the decimal portion of minutess and hourss
        millis = Date.now() - startTime; 
        seconds = Math.trunc(millis / 1000);
        minutes = Math.trunc(seconds / 60);
        hours = Math.trunc(minutes / 60);

        // Format time by conditionally prepending a zero
        hr = hours < 10 ? '0' + hours : hours;
        min = minutes < 10 ? '0' + minutes : minutes;
        sec = seconds < 10 ? '0' + seconds : seconds;
        millis %= 1000; // otherwise, millis will continue past three digits in stop watch
        ms = millis < 10 ? '00' + millis : millis < 100 ? '0' + millis : millis;
        
        // update stopWatch DOM element
        stopWatch.innerText = `${hr}:${min}:${sec}.${ms}`;
    }
} // end function StopWatch()


const sw = new StopWatch();


