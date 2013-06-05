Handlebars.registerHelper('date', function (time) {

    return new Date(time).toLocaleString();
});
