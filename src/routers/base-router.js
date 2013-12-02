/*
 * Base type for all routers with common functionality.
 */

codebrowser.router.BaseRouter = Backbone.Router.extend({

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    fetchModel: function (model, useCache, onSuccess) {

        var self = this;

        model.fetch({

            cache: useCache,
            expires: useCache ? config.cache.expires : 0,

            success: function (model, response, options) {

                onSuccess(model, response, options);
            },

            error: function () {

                self.notFound();
            }
        });
    }
});
