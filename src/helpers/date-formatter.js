Handlebars.registerHelper('date', function (date, precise) {

    if (precise) {
        return moment(new Date(date)).format('D.M.YYYY HH.mm.ss');
    }

    return moment(new Date(date)).format('D.M.YYYY HH.mm');
});
