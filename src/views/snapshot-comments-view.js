codebrowser.view.SnapshotCommentsView = Backbone.View.extend({

    id: 'snapshot-comments-container',
    template: Handlebars.templates.SnapshotCommentsContainer,

    newCommentType: 'answer',

    events: {

        'click [data-action="create-comment"]': 'createComment',
        'click [data-action="answer-comment"]': 'answerComment',
        'click [data-action="snapshot-comment"]': 'snapshotComment'

    },

    collection:  new codebrowser.collection.CommentCollection(),

    /* Initialise */

    initialize: function () {

        this.render();
    },

    /* Render */

    render: function () {

        var attributes = {
            username: Utils.getLocalStorageValue('username', 'AnonymousJack'),
            comments: this.collection.toJSON()
        };

        var output = $(this.template(attributes));

        this.$el.html(output);

        this._renderCommentsView();
    },

    /* Remove */

    remove: function () {

        // Remove Comments view
        this._removeCommentsView();

        Backbone.View.prototype.remove.call(this);
    },

    /* Update */

    update: function (snapshot) {

        this.snapshot = snapshot;

        this.collection = new codebrowser.collection.CommentCollection(null, { studentId: this.snapshot.get('studentId'),
                                                                           courseId: this.snapshot.get('courseId'),
                                                                           exerciseId: this.snapshot.get('exerciseId') });
        var self = this;

        // Fetch comments
        this.collection.fetch({

            cache: false,
            expires: 0,

            success: function () {

                self.render();
            },

            error: function () {

                throw new Error('Failed comments fetch.');
            }
        });

    },

    /* Actions */

    createComment: function (event) {

        event.preventDefault();

        var commentUsername = $('[data-id="comment-username"]', this.$el).val().trim();
        var commentText = $('[data-id="comment-text"]', this.$el).val().trim();

        if (!commentText) {
            return;
        }

        var self = this;

        // Create new comment
        var commentData = {
            comment: commentText,
            student: { id: self.snapshot.get('studentId') },
            course: { id: self.snapshot.get('courseId') },
            exercise: { id: self.snapshot.get('exerciseId') }
        };

        if (this.newCommentType === 'snapshot') {

            commentData.snapshot = { id: self.snapshot.id };
        }

        if (commentUsername) {

            commentData.username = commentUsername;
            localStorage.setItem('username', commentUsername);
        }

        var comment = new codebrowser.model.Comment(commentData);


        // Save comment
        comment.save({}, {

            success: function () {

                self.collection.add(comment);
                self._renderCommentsView();
            },

            error: function () {

                throw new Error('Failed comment save.')
            }
        });

        this._resetForm();
    },

    answerComment: function () {

        this.newCommentType = 'answer';
    },

    snapshotComment: function () {

        this.newCommentType = 'snapshot';
    },

    /* Helpers */

    _resetForm: function () {

        this.$el.find('textarea').val('').focus();

    },

    _renderCommentsView: function () {

        this._removeCommentsView();

        var currentSnapshotId = (this.snapshot) ? this.snapshot.id : 0;

        this.commentsView = new codebrowser.view.CommentsView({
            showBreadcrumb: false,
            collection: this.collection.bySnapshotId(currentSnapshotId)
        });
        this.$el.append(this.commentsView.el);

        this.commentsView.render();
    },

    _removeCommentsView: function () {

        if (this.commentsView) {

            this.commentsView.remove();
        }
    }
});
