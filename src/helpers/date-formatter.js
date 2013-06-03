Handlebars.registerHelper('snapshotTime', function () {

    return new Date(this.snapshotTime).toLocaleString();
});
