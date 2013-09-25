codebrowser.view.StudentsView = Backbone.View.extend({

    id: 'students-container',
    template: Handlebars.templates.StudentsContainer,
    
    events: {
        'click [data-action="search"]': 'filterStudentListByName',
        'keyup [data-id="query-string"]': 'filterStudentListByName',
        'keypress [data-id="query-string"]': 'filterStudentListByName'
    },

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            students: this.collection.toJSON()

        };

        if (this.course && this.exercise) {
            attributes = _.extend(attributes, { course: this.course.toJSON(), exercise: this.exercise.toJSON() });
        }

        else if (this.course) {
            attributes = _.extend(attributes, { course: this.course.toJSON() });
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
        
        // bind events also on re-render
        this.delegateEvents();
    },
    
    
    filterStudentListByName: function() {
        
        this.filterHelper = codebrowser.helper.ListViewFilter;
        this.filterHelper.$el = this.$el;
        
        this.filterHelper.filterList();
    }
     
});

