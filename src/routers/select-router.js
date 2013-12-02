codebrowser.router.SelectRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'courses/:courseId(/)':                               'navigateToCourse',
        'courses/:courseId/select(/)':                        'select'

    },

    /* Initialise */

    initialize: function () {

        this.selectView = new codebrowser.view.SelectView();
    },

    /* Actions */

    navigateToCourse: function (courseId) {

        codebrowser.app.exerciseRouter.navigate('#/courses/' +
                                                courseId +
                                                '/select', { replace: true });
    },

    select: function (courseId) {

        var self = this;
        var course = codebrowser.model.Course.findOrCreate({ id: courseId });
        this.fetchModel(course, true, function () {

            self.selectView.course = course;
            codebrowser.controller.ViewController.push(self.selectView, true);
        });
    }
});
