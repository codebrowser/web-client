/* Global test configuration */

if (typeof config === 'undefined') {
    config = { };
}

config.test = {

    casperjs: {

        clearLocalStorage: true

    },

    async: {

        timeout: 1000,
        waitDuration: 500

    }
}
