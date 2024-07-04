
// Stop Watch using JS objects

function StopWatch()
{
    let startTime = 0, stoppedTime = 0;
    let lapTimes = new Array();
    let running = false;
    let runner = null; // variable for setInterval
    let millis = 0, seconds = 0, minutes = 0, hours = 0;

    let stopWatch = document.querySelector('#time');
    let startButton = document.querySelector('.start');
    let stopButton = document.querySelector('.stop');
    let resetButton = document.querySelector('.reset');
    let lapButton = document.querySelector('.lap');
    let lapTable = document.querySelector('.lap-table');

    startButton.addEventListener('click', () => this.start());
    stopButton.addEventListener('click', () => this.stop());
    resetButton.addEventListener('click', () => this.reset());
    lapButton.addEventListener('click', () => this.lapTime());
    
    this.start = function()
    {
        // starts the watch
        if(running)
            throw new Error('Stopwatch has already started.');
        
        running = true;
        startTime = new Date(); // capture the current date and time
        runner = setInterval(this.displayTime, 10);
    }

    this.stop = function ()
    {
        // stops the watch
        if(!running)
            throw new Error('Stopwatch is not running');

        running = false;
        stoppedTime += Date.now() - startTime;
        clearInterval(runner);
    }

    this.reset = function()
    {
        if(running)
            this.stop();
        
        // resets the time
        startTime = 0;
        stoppedTime = 0;
        lapTimes = new Array();
        running = false;
        millis = 0, seconds= 0, minutes= 0, hours = 0;
        stopWatch.innerText = '00:00:00.000';
        lapTable.innerHTML = ''; // since there are no children with event handlers
    }

    let calculateTime = function()
    {
        // Get duration in millisecondss and create time values
        // Math.trunc() removes the decimal portion of minutess and hours
        millis = Date.now() - startTime + stoppedTime;
        seconds = Math.trunc(millis / 1000);
        minutes = Math.trunc(seconds / 60);
        hours = Math.trunc(minutes / 60);
    }
    let getTime = function()
    {
        let hrString = '0', minString = '0', secString = '0', msString = '0';

        millis %= 1000; // otherwise, millis will continue past three digits in stop watch
        msString = millis < 10 ? '00' + millis : millis < 100 ? '0' + millis : millis;

        seconds %= 60;
        secString = seconds < 10 ? '0' + seconds : seconds;

        minutes %= 60;
        minString = minutes < 10 ? '0' + minutes : minutes;

        hours %= 60;
        hrString = hours < 10 ? '0' + hours : hours;

        return `${hrString}:${minString}:${secString}.${msString}`;
    }
    this.lapTime = function()
    {
        let addToTable = document.createElement('span');
        addToTable.innerText = getTime();

        if(!lapTable.hasChildNodes)
               lapTable.appendChild(addToTable);    //Put newest lap time on top of list
        else
            lapTable.insertBefore(addToTable, lapTable.firstChild);
    }
    

    this.displayTime = function()
    {
        calculateTime();
        stopWatch.innerText = getTime();
    }
} 

const sw = new StopWatch();