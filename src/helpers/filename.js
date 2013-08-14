Handlebars.registerHelper('filename', function (name) {

    return _.last(name.split('/'));
});
