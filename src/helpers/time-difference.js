codebrowser.helper.TimeDifference = {

    calculate: function (time, previousTime) {

        var difference = time - previousTime;

        var seconds = Math.round(difference/1000);

        var value;
        var timeUnit;

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
    }

}

