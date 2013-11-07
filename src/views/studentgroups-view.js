codebrowser.view.StudentGroupsView = Backbone.View.extend({

    id: 'studentgroups-container',
    template: Handlebars.templates.StudentGroupsContainer,

    events: {
        'click [data-action="search"]': 'filterByName',
        'keyup [data-id="query-string"]': 'filterByName',
        'keypress [data-id="query-string"]': 'filterByName'
    },

    render: function () {

        var attributes = {

            studentGroups: this.collection.toJSON(),
            numberOfStudents: this.numberOfStudents
        };

        var output = this.template(attributes);

        this.$el.html(output);
    },

    filterByName: function() {

        if (!this.filterHelper) {

            var filterOptions = {

                'containerSelector' : '#' + this.id
            };

            this.filterHelper = new codebrowser.helper.ListViewFilter(filterOptions);
        }

        this.filterHelper.filterList();
    }
});
