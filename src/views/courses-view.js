codebrowser.view.CoursesView = Backbone.View.extend({

    id: 'courses-container',
    template: Handlebars.templates.CoursesContainer,

    events: {
        'click [data-action="search"]': 'filterCourseListByName',
        'keyup [data-id="query-string"]': 'filterCourseListByName',
        'keypress [data-id="query-string"]': 'filterCourseListByName'
    },

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            studentId: this.collection.studentId,
            student: this.student.toJSON(),
            courses: this.collection.toJSON(),
            amountOfStudents: this.collection.amountOfStudents

        };

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
    },

    filterCourseListByName: function() {

        if (!this.filterHelper) {

            var filterOptions = {

                'containerSelector' : '#' + this.id
            };

            this.filterHelper = new codebrowser.helper.ListViewFilter(filterOptions);
        }

        this.filterHelper.filterList();
    }
});
