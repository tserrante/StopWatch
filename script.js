
// Stop Watch using JS objects

function StopWatch()
{
    let startTime, endTime, running, duration = 0;
    let milliSeconds, seconds, minutes, hours = 0;

    this.start = function()
    {
        // starts the watch
        if(running)
            throw new Error('Stopwatch has already started.');
        
        running = true;

        startTime = new Date(); // capture the current date and time
    }

    this.stop = function ()
    {
        // stops the watch
        if(!running)
            throw new Error('Stopwatch is not running');

        running = false;

        endTime = new Date();

        duration = new Date(endTime - startTime);
        
        console.log(this.formatDuration());
    }

    this.reset = function()
    {
        // resets the time
        startTime = null;
        endTime = null;
        running = false;
        duration = null;
    }

    this.formatDuration = function()
    {
        // get the milliseconds from the time and convert to seconds
        milliSeconds = duration.getMilliseconds();
        seconds = Math.trunc( milliSeconds / 1000);
        minutes = Math.trunc(seconds / 60);
        hours = Math.trunc(seconds / 3600); 
        return `${hours}:${minutes}:${seconds}:${milliSeconds}`;
    }

    Object.defineProperty(this, 'duration', {
        get:function(){return duration;}
    })


} // end function StopWatch()

let sw = new StopWatch();


