codebrowser.view.CourseView = Backbone.View.extend({

    el: config.view.container,

    template: {

        courseContainer: Handlebars.templates.CourseContainer

    },

    initialize: function () {

        // Course container
        this.courseContainer = $('<div>', { id: 'course-container' });

        // Element containing courses
        this.courseElement = $('<div>', { id: 'courses' });

        // Element containing exercises
        this.exerciseContainer = $('<div>', { id: 'exercise-container' });

        this.courseContainer.append(this.courseElement);
        this.courseContainer.append(this.exerciseContainer);

        // Exercises
        this.exerciseView = new codebrowser.view.ExerciseView({ el: this.exerciseContainer });
    },

    remove: function () {

        // Empty container
        this.$el.empty();
    },

    render: function () {

        this.model = {

            studentId: this.collection.studentId,
            list: this.collection.toJSON()

        }

        // Append wrapper to DOM
        this.$el.append(this.courseContainer);

        // Template for course container
        var courseContainerOutput = $(this.template.courseContainer(this.model));

        // Update course element
        this.courseElement.html(courseContainerOutput);
    },

    update: function () {

        this.render();

        var exerciseCollection = new codebrowser.collection.ExerciseCollection(null, { studentId: this.collection.studentId,
                                                                                       courseId: this.collection.at(0).id });

        for (var i = 0; i < this.collection.at(0).get('exercises').length; ++i) {
            exerciseCollection.push(this.collection.at(0).get('exercises').at(i));
        }

        this.exerciseView.collection = exerciseCollection;

        // Update exercise view
        this.exerciseView.render();
    }
});
