codebrowser.helper.Duration = {

    calculate: function (time, previousTime) {

        var difference = time - previousTime;

        var value;
        var timeUnit;

        var seconds = Math.round(difference/1000);

        if (seconds > 60) {

            var minutes = Math.round(seconds / 60);

            if (minutes > 60) {

                var hours = Math.round(minutes / 60);

                if (hours > 24) {

                    var days = Math.round(hours / 24);

                    value = days;
                    timeUnit = 'day';

                } else {

                    value = hours;
                    timeUnit = 'hour';
                }

            } else {

                value = minutes;
                timeUnit = 'minute';
            }

        } else {

            value = seconds;
            timeUnit = 'second';
        }

        if (value > 1) {
            timeUnit += 's';
        }

        return value + ' ' + timeUnit;
    },

    simplify: function (duration) {

        if (duration.indexOf('second') !== -1) {
            duration = duration.slice(0, duration.indexOf('s') + 1);
        }

        if (duration.indexOf('minute') !== -1) {
            duration = duration.slice(0, duration.indexOf('m') + 1);
        }

        if (duration.indexOf('hour') !== -1) {
            duration = duration.slice(0, duration.indexOf('h') + 1);
        }

        if (duration.indexOf('day') !== -1) {
            duration = duration.slice(0, duration.indexOf('d') + 1);
        }

        return duration.replace(' ', '');
    }
}

Handlebars.registerHelper('duration', function (time, previousTime) {

    return codebrowser.helper.Duration.calculate(time, previousTime);
});
