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
    },

    checkBackendCapabilities: function () {

        var apiRoot = config.api.main.root;

        $.ajax({

            url: apiRoot+'tagnames',
            async: false,
            type: 'HEAD',

            success: function (response, status) {
                console.log(status);
                if (status === 'success') {

                    localStorage.setItem('config.tagnames', true);
                }
            }

        });

        $.ajax({

            url: apiRoot+'tagcategories',
            async: false,
            type: 'HEAD',

            success: function (response, status) {
                console.log(status);
                if (status === 'success') {

                    localStorage.setItem('config.tagcategories', true);
                }
            }

        });

        $.ajax({

            url: apiRoot+'comments?page=0&size=1',
            async: false,
            type: 'HEAD',

            success: function (response, status) {
                console.log(status);
                if (status === 'success') {

                    localStorage.setItem('config.comments', true);
                }
            }

        });

        $.ajax({

            url: apiRoot+'studentgroups',
            async: false,
            type: 'HEAD',

            success: function (data, status, response) {
                console.log(status);
                console.log(response.getResponseHeader('Allow'));
                if (status === 'success') {

                    localStorage.setItem('config.studentgroups', true);
                }
            }

        });

    }

};


