codebrowser.router.StudentGroupRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'studentgroups(/)': 'studentGroups',

    },

    /* Initialise */

    initialize: function () {

        this.studentGroupsView = new codebrowser.view.StudentGroupsView();
    },

    /* Actions */

    studentGroups: function () {

        var self = this;

        var studentGroupCollection = new codebrowser.collection.StudentGroupCollection();

        this.studentGroupsView.collection = studentGroupCollection;

        this.fetchModel(studentGroupCollection, true, function () {

            codebrowser.controller.ViewController.push(self.studentGroupsView, true);
        });
    }
});
