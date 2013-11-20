codebrowser.view.CommentsView = Backbone.View.extend({

    id: 'comments-container',
    template: Handlebars.templates.CommentsContainer,

    showBreadcrumb: true,

    events: {

        'click [data-action="delete-comment"]': 'confirmDelete',
        'click [data-action="toggle-comment-edit"]': 'setCommentEditable',
        'blur .comment-text': 'updateComment',

    },

    initialize: function (options) {

        if (options) {
            this.collection = options.collection;
            this.showBreadcrumb = options.showBreadcrumb;
        }
    },

    /* Render */

    render: function () {

        this._markCommentsReadFlags();

        // View attributes
        var attributes = {

            showBreadcrumb: this.showBreadcrumb,
            comments: this.collection.toJSON()

        };

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
    },

    /* Actions */
    confirmDelete: function (event) {

        event.preventDefault();

        var confirmed = window.confirm('Are you sure?');

        if (confirmed) {

            var commentId = $(event.target).data('id');
            this._delete(commentId);
        }
    },

    setCommentEditable: function (event) {

        event.preventDefault();

        var commentId = $(event.target).data('id');
        var $commentTextEl = $('.comment-text[data-id="' + commentId + '"]');

        $commentTextEl.attr('contenteditable', true).focus();
    },

    updateComment: function (event) {

        var $commentElement = $(event.target);
        $commentElement.attr('contenteditable', false);

        var commentId = $commentElement.data('id');
        var commentText = $commentElement.html().trim();

        var comment = this.collection.get(commentId);

        comment.set({'comment': commentText});

        // Update comment
        comment.save({
            error: function () {

                throw new Error('Failed comment update.')
            }
        });
    },

    _markCommentsReadFlags: function () {

        var commentsRead = this._getCommentsRead();
        var commentIds = commentsRead;

        this.collection.each(function(comment) {

            var id = comment.get('id');

            var isRead = (commentsRead.indexOf(id) > -1);

            comment.set('isRead', isRead, {silent: true});

            if (commentIds.indexOf(id) === -1) {
                commentIds.push(id);
            }
        });

        this._setCommentsRead(commentIds);
    },

    _getCommentsRead: function () {
        var commentsRead = localStorage.getItem('commentsRead');

        if (commentsRead === null) {

            return [];
        } else {

            return JSON.parse(commentsRead);
        }
    },

    _setCommentsRead: function (commentsRead) {
        localStorage.setItem('commentsRead', JSON.stringify(commentsRead));
    },

    _delete: function (commentId) {

        var comment = this.collection.get(commentId);

        var self = this;

        // Destroy comment
        comment.destroy({

            success: function () {

                // Remove from collection
                self.collection.remove(comment);

                self.render();
            },

            error: function () {

                throw new Error('Failed comment delete.')
            }
        });
    }
});

