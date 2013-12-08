codebrowser.view.NavigationView = Backbone.View.extend({

    id: 'navigation-container',
    template: Handlebars.templates.Navigation,

    tourEnabled: false,
    startTourCallback: null,

    events: {

        'click #startTour': 'startTour'

    },

    /* Render */

    render: function () {

        var attributes = {

            showComments: localStorage.getItem('config.comments') === 'true' ? true : false,
            showTags: localStorage.getItem('config.tagnames') === 'true' ? true : false,
            showTagCategories: localStorage.getItem('config.tagcategories') === 'true' ? true : false,
            showStudentGroups: localStorage.getItem('config.studentgroups') === 'true' ? true : false,
            tourEnabled: this.tourEnabled
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
        return this;

    },

    /* Events */

    startTour: function (event) {

        if (_.isFunction(this.startTourCallback)) {

            this.startTourCallback(event);
        }
    },

    enableTour: function (startTourCallback) {

        this.startTourCallback = startTourCallback;
        this.tourEnabled = true;

        this.render();
    },

    disableTour: function () {

        this.startTourCallback = null;
        this.tourEnabled = false;

        this.render();
    }

});
