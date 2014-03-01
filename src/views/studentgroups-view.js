codebrowser.view.StudentGroupsView = Backbone.View.extend({

    id: 'studentgroups-container',
    template: Handlebars.templates.StudentGroupsContainer,

    events: {
        'click [data-action="search"]': 'filterByName',
        'keyup [data-id="query-string"]': 'filterByName',
        'keypress [data-id="query-string"]': 'filterByName'
    },

    render: function () {

        var output = this.template({ studentGroups: this.collection.toJSON() });
        this.$el.html(output);

        return this;
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
