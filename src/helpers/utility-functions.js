/*jshint unused: false */

var Utils = {

    getLocalStorageValue: function(name, defaultValue) {

        if (localStorage.getItem(name) === null) {
            localStorage.setItem(name, defaultValue);
        }

        return localStorage.getItem(name);

    },


    parseConceptData: function(data) {

        data.forEach(function(element) {

            element.value = parseInt(element.size, 10);

        });

        data.sort(function(a, b) {
            if (a.value < b.value) {
                return 1;
            }
            if (a.value > b.value) {
                return -1;
            }
            return 0;
        });

        return { children: data };
    }

};


