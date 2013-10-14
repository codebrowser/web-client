/*jshint unused: false */

var Utils = {
    _getLocalStorageValue: function(name, defaultValue) {

        if (localStorage.getItem(name) === null) {
            localStorage.setItem(name, defaultValue);
        }

        return localStorage.getItem(name);

    }
};


