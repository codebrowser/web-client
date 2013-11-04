codebrowser.collection.TagNameCollection = Backbone.Collection.extend({

    model: codebrowser.model.TagName,

    url: function () {

        /* Fetch tags by tag category */
        if (this.tagCategoryId) {

            if (this.onlySnapshotTags) {

                return config.api.main.root + 'tagcategories/' + this.tagCategoryId + '/tagnames/snapshots';
            }

            if (this.onlyExerciseAnswerTags) {

                return config.api.main.root + 'tagcategories/' + this.tagCategoryId + '/tagnames/exercises';
            }

            if (this.unusedTags) {

                return config.api.main.root + 'tagcategories/' + this.tagCategoryId + '/tagnames/unused';
            }

        }

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
            this.tagCategoryId = options.tagCategoryId;
            this.unusedTags = options.unusedTags;
        }
    }
});
