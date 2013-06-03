Handlebars.registerHelper('convert', function (time) {

    return new Date(time).toLocaleString();
});
