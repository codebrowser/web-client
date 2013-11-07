codebrowser.router.StudentGroupRouter = Backbone.Router.extend({

    routes: {

        'studentgroups(/)': 'studentGroups',

    },

    /* Initialise */

    initialize: function () {

        this.studentGroupsView = new codebrowser.view.StudentGroupsView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    studentGroups: function () {

        var self = this;

        var studentGroupCollection = new codebrowser.collection.StudentGroupCollection();

        this.studentGroupsView.collection = studentGroupCollection;

        studentGroupCollection.fetch({

            cache: true,
            expires: config.cache.expires,

            success: function () {

                // Show groups only if at least one exists; otherwise show list of all students.
                if (studentGroupCollection.size() > 0) {

                    var studentCollection = new codebrowser.collection.StudentCollection();

                    studentCollection.fetch({

                        cache: true,
                        expires: config.cache.expires,

                        success: function () {

                            self.studentGroupsView.numberOfStudents = studentCollection.size();
                            self.studentGroupsView.render();
                            codebrowser.controller.ViewController.push(self.studentGroupsView);
                        },

                        error: function () {

                            self.notFound();
                        }
                    });


                } else {

                    codebrowser.app.student.navigate('#/students', { replace: true });
                }
            },

            error: function () {

                self.notFound();
            }
        });
    }
});
