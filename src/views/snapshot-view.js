codebrowser.views.SnapshotView = Backbone.View.extend({

    initialize: function () {

        this.render();
    },

    events: {

        'click #prevButton': 'previous',
        'click #nextButton': 'next'
    },

    setModel: function (model) {

        this.model = model;
    },

    previous: function (eventInformation) {

        var index = this.collection.indexOf(this.model);
        var prevModel = this.collection.at(index-1);

        codebrowser.app.snapshot.navigateTo(prevModel.id);
        eventInformation.preventDefault();
    },

    next: function (eventInformation) {

        var index = this.collection.indexOf(this.model);
        var nextModel = this.collection.at(index+1);

        codebrowser.app.snapshot.navigateTo(nextModel.id);
        eventInformation.preventDefault();
    },

    render: function () {

        var template = $('#snapshot-template').html();
        $(this.el).html(template);
    }
});
