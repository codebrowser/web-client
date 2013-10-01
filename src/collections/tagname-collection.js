codebrowser.collection.TagNameCollection = Backbone.Collection.extend({

    model: codebrowser.model.TagName,

    url: function () {

        /* Only tag names used by snapshot tags */
        if (this.onlySnapshotTags) {

            return config.api.main.root + 'tagnames/snapshots';
        }

        /* Only tag names used by normal tags */
        if (this.onlyExerciseAnswerTags) {

            return config.api.main.root + 'tagnames/exerciseanswers';
        }

        /* All tag names */
        return config.api.main.root + 'tagnames';
    },

    initialize: function (models, options) {

        if (options) {

            this.onlySnapshotTags = options.onlySnapshotTags;
            this.onlyExerciseAnswerTags = options.onlyExerciseAnswerTags;
        }
    }
});
