codebrowser.views.SnapshotView = Backbone.View.extend({

    initialize: function () {

        this.render();
    },

    render: function () {

//        var template = $('#snapshot-template').html();
//        var output = Mustache.render(template, { data: this.model });

        editor.config.setCode(this.model);
//        $(this.el).html(output);
    }
});
