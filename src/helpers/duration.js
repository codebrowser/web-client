codebrowser.helper.Duration = {

    calculate: function (time, previousTime, simplify) {

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

        if (value !== 1) {
            timeUnit += 's';
        }

        if (simplify) {
            timeUnit = timeUnit.slice(0, 1);
        }

        return value + ' ' + timeUnit;
    }
}

Handlebars.registerHelper('duration', function (time, previousTime) {

    return codebrowser.helper.Duration.calculate(time, previousTime);
});
