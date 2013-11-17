codebrowser.view.FooterView = Backbone.View.extend({

    id: 'footer-container',
    template: Handlebars.templates.Footer,
    events: {
        'click [data-action="save"]': 'updateApiUrl'
    },

    /* Render */

    render: function () {

        var attributes = {

            apiUrl: config.api.main.root,
            showComments: localStorage.getItem('config.comments'),
            showTags: localStorage.getItem('config.tagnames'),
            showTagCategories: localStorage.getItem('config.tagcategories'),
            showStudentGroups: localStorage.getItem('config.studentgroups')
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
        return this;

    },

    updateApiUrl: function () {

        var apiUrl = $('#apiUrl').val();
        localStorage.removeItem('backboneCache');
        localStorage.setItem('config.apiUrl', apiUrl);
        location.href = '.';

    },

});
