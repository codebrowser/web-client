Handlebars.registerHelper('convert', function (time) {

    return new Date(time).toLocaleString();
});

Handlebars.registerHelper('get', function () {

    console.log(this);
});