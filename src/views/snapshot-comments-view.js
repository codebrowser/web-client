codebrowser.view.SnapshotCommentsView = Backbone.View.extend({

    id: 'snapshot-comments-container',
    template: Handlebars.templates.SnapshotCommentsContainer,

    newCommentType: 'answer',

    events: {

        'click [data-action="create-comment"]': 'createComment',
        'click [data-action="open-answer-comment"]': 'openAnswerComment',
        'click [data-action="open-snapshot-comment"]': 'openSnapshotComment',

    },

    /* Initialise */

    initialize: function () {

        this.render();
    },

    /* Render */

    render: function () {

        var attributes = {
            username: Utils.getLocalStorageValue('username', 'AnonymousJack')
        };

        var output = $(this.template(attributes));

        this.$el.html(output);
    },

    /* Update */

    update: function (snapshot) {

        this.snapshot = snapshot;

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

                self.$el.find('#success-message').fadeIn(10).delay(3000).fadeOut();
            },

            error: function () {

                self.$el.find('#error-message').fadeIn(10).delay(3000).fadeOut();
            }
        });

        this._resetModal();
    },

    _resetModal: function () {

        this.$el.find('.modal').modal('hide');
        this.$el.find('textarea').val('');
    },

    openAnswerComment: function () {

        this.newCommentType = 'answer';
        this._commentTypeChanged();
    },

    openSnapshotComment: function () {

        this.newCommentType = 'snapshot';
        this._commentTypeChanged();
    },

    _commentTypeChanged: function () {

        // update modal view
        this.$el.find('#comment-type').text( this.newCommentType );
    }
});
