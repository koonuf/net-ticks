var TICKS_IN_MILLISECONDS = 10000,
    MILLISECONDS_IN_HOUR = 60 * 60 * 1000,
    NET_START_DATE = new Date("0001-01-01").getTime(),
    MAX_TICKS = 3155378975999999999,
    MIN_TICKS = 0;

exports.netTicksToDate = function (ticks, timezoneOffsetHours) {
    var netMilliseconds, timezoneOffsetMilliseconds;
    
    if (!ticks || typeof ticks !== 'number' || ticks < MIN_TICKS || ticks > MAX_TICKS) { 
        throw 'ticks should be a number between ' + MIN_TICKS + ' and ' + MAX_TICKS;
    }

    if (timezoneOffsetHours) {
        if (typeof timezoneOffsetHours !== 'number' || timezoneOffsetHours < -12 || timezoneOffsetHours > 14) {
            throw 'timezoneOffsetHours is optional number between -12 and 14';
        }
    }
    
    netMilliseconds = Math.floor(ticks / TICKS_IN_MILLISECONDS);
    timezoneOffsetMilliseconds = (timezoneOffsetHours || 0) * MILLISECONDS_IN_HOUR;
    
    return new Date(netMilliseconds + NET_START_DATE - timezoneOffsetMilliseconds);
};