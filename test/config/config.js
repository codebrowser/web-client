/* Global test configuration */

if (typeof config === 'undefined') {
    config = { };
}

config.test = {

    casperjs: {

        clearLocalStorage: true

    },

    async: {

        timeout: 500,
        waitDuration: 250

    }
}
