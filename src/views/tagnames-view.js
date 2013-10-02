codebrowser.view.TagNamesView = Backbone.View.extend({

    id: 'tagnames-container',
    template: Handlebars.templates.TagNamesContainer,

    events: {
        'click [data-action="search"]': 'filterTagListByName',
        'keyup [data-id="query-string"]': 'filterTagListByName',
        'keypress [data-id="query-string"]': 'filterTagListByName'
    },

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            snapshotTagNames: this.snapshotTagNames.toJSON(),
            exerciseAnswerTagNames: this.exerciseAnswerTagNames.toJSON()

        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
    },

    filterTagListByName: function () {

        this.filterHelper = codebrowser.helper.ListViewFilter;
        this.filterHelper.$el = this.$el;

        this.filterHelper.filterList();
    }
});
