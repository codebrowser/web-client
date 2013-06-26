Handlebars.registerHelper('date', function (date) {

    return moment(new Date(date)).format('D.M.YYYY HH.mm.ss');
});
