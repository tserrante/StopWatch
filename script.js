
// Stop Watch using JS objects

function StopWatch(milliSeconds, seconds, minutes, hours)
{
    let milliSeconds, seconds, minutes, hours;

    // define milliSeconds
    Object.defineProperty(this, 'milliSeconds', {
        get: function(){return milliSeconds;},
        set: function(value)
        {
            if(!value || value < 0) 
                throw new Error('Invalid time (milliseconds)');
            else
                milliSeconds = value;
        }
    })
    // define seconds
    Object.defineProperty(this, 'seconds', {
        get: function(){return seconds;},
        set: function(value)
        {
            if(!value || value < 0 ) 
                throw new Error('Invalid time (seconds)');
            else
                seconds = value;
        }
    })
    // define minutes
    Object.defineProperty(this, 'minutes', {
        get: function(){return minutes;},
        set: function(value)
        {
            if(!value || value < 0) 
                throw new Error('Invalid time (minutes)');
            else
                minutes = value;
        }
    })
    // define milliSeconds
    Object.defineProperty(this, 'hours', {
        get: function(){return hours;},
        set: function(value)
        {
            if(!value || value < 0) 
                throw new Error('Invalid time (hours)');
            else
                hours = value;
        }
    })

    function getTime()
    {
        console.log(hours + " : " + minutes + " : " + seconds + " : " + milliSeconds);
    }

    function start()
    {
        // starts the watch
    }

    function stop()
    {
        // stops the watch

    }

    function duration()
    {
        // displays the duration after both stop and start
    }

    function reset()
    {
        // resets the time
        milliSeconds.set = 0;
        seconds.set = 0;
        minutes.set = 0;
        hours.set = 0;
    }
}

