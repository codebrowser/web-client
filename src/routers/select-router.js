codebrowser.router.SelectRouter = Backbone.Router.extend({

    routes: {

        'courses/:courseId(/)':                               'navigateToCourse',
        'courses/:courseId/select(/)':                        'select'

    },

    /* Initialise */

    initialize: function () {

        this.selectView = new codebrowser.view.SelectView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    navigateToCourse: function (courseId) {
        codebrowser.app.exercise.navigate('#/courses/' +
                                          courseId +
                                          '/select', { replace: true });
    },

    select: function (courseId) {
        var self = this;
        var course = codebrowser.model.Course.findOrCreate({ id: courseId });
        course.fetch({

            cache: true,
            expires: config.cache.expires,

            success: function () {

                self.selectView.course = course;
                self.selectView.render();
                codebrowser.controller.ViewController.push(self.selectView);
            },

            // Student fetch failed
            error: function () {

                self.notFound();
            }

        });
    }
});
