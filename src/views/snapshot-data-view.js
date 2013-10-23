codebrowser.view.SnapshotsDataView = Backbone.View.extend({
 
    id: 'snapshots-data-container',
    template: Handlebars.templates.SnapshotDataContainer,

    isActive: false,
 
    initialize: function (options) {

        this.isActive = Utils._getLocalStorageValue('showData', true) === 'true';
        this.parentView = options.parentView;

    },

    toggle: function() {

        this.isActive = !this.isActive;

        // Store state
        localStorage.setItem('showData', this.isActive);

        this.$el.slideToggle();

    },
 
    render: function () {
       
        var attributes = {
       
            tests : this.collection.models[this.index].attributes.tests,
            percentageOfTestsPassing : this.collection.models[this.index].attributes.percentageOfTestsPassing
       
        };
        var output = this.template(attributes);
 
        this.$el.html(output);
    },

    update: function (collection, index) {
        this.collection = collection;
        this.index = index;
        this.render();
    }

});

