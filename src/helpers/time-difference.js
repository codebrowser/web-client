codebrowser.helper.TimeDifference = {

    calculate: function (time, previousTime) {

        var difference = time - previousTime;

        var seconds = Math.round(difference/1000);

        var value;

        if (seconds > 60) {
            var minutes = Math.round(seconds / 60);

            if (minutes > 60) {
                var hours = Math.round(minutes / 60);

                if (hours > 24) {
                    var days = Math.round(hours / 24);

                    value = days + ' day';

                } else {

                    value = hours + ' hour';
                }

            } else {

                value = minutes + ' minute';
            }

        } else {

            value = seconds + ' second';
        }

        var thenum = value.replace(/[A-Za-z$-]/g, '');

        if (parseInt(thenum, 10) > 1) {
            value += 's';
        }

        return value;
    }

}

