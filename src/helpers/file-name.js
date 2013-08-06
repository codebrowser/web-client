Handlebars.registerHelper('fileName', function (name) {

    return _.last(name.split('/'));
});
