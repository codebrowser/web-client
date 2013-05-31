codebrowser.view.ErrorView = Backbone.View.extend({

    render: function() {

        $(this.el).empty();
        $('<br/>').appendTo(this.el);
        $('<h1/>').text('You didn\'t find what you were looking for, now good day.').appendTo(this.el);
    }
});
