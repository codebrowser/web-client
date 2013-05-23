codebrowser.views.SnapshotView = Backbone.View.extend({

    render: function () {

        ace.edit(this.el).setValue(this.model);
    },

    setContent: function (data) {
        this.model = data;
        this.render();
    }
});
