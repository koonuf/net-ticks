net-ticks
=========

.NET DateTime ticks to JS Date conversion utility

```js
var ticksConverter = require('net-ticks');

var ticks = 630636984690000000,
    timezoneOffsetHours = -9;

var date = ticksConverter.netTicksToDate(ticks, timezoneOffsetHours);

    date.getTime() === (new Date('1999-05-30 22:01:09.000 -0900')).getTime();
```