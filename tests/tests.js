var assert = require('assert');
var ticksConverter = require('./../index.js');
var expect = require('expect.js');

var checks = [
    {
        ticks: 635520799092948133,
        offsetHours: 5,
        date: '2014-11-20 11:31:49.294 +0500'
    },
    {
        ticks: 630636984690000000,
        offsetHours: 0,
        date: '1999-05-30 22:01:09.000 +0000'
    },
    {
        ticks: 630636984690000000,
        offsetHours: -9,
        date: '1999-05-30 22:01:09.000 -0900'
    }
];

describe('Checking edge values', function () {
    it('throw error on ivalid ticks', function () {
        var invalidConversion = function () { 
            ticksConverter.netTicksToDate("test");
        };

        expect(invalidConversion).to.throwException();
    });

    it('throw error on ivalid timezoneOffsetHours', function () {
        var invalidConversion = function () {
            ticksConverter.netTicksToDate(630636984690000000, 100);
        };
        
        expect(invalidConversion).to.throwException();
    });
    
});

describe('Checking valid ticks', function () {
    var check;
    for (var i = 0; i < checks.length; i++) {
        check = checks[i];

        it('should produce date ' + check.date + ' for ticks ' + check.ticks + ' with offset hours ' + check.offsetHours, function () {
            var expected = (new Date(check.date)).getTime(),
                actual = ticksConverter.netTicksToDate(check.ticks, check.offsetHours).getTime();

            expect(actual).to.eql(expected);
        });
    }
    
});