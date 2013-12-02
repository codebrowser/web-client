codebrowser.view.CommentsView = Backbone.View.extend({

    id: 'comments-container',
    template: Handlebars.templates.CommentsContainer,

    showBreadcrumb: true,

    events: {

        'click [data-action="delete-comment"]': 'confirmDelete',
        'click [data-action="toggle-comment-edit"]': 'setCommentEditable',
        'blur .comment-text': 'updateComment',
        'click span.cnext': 'cNextPage',
        'click span.cprev': 'cPrevPage'

    },

    initialize: function (options) {

        if (options) {

            this.collection = options.collection;
            this.showBreadcrumb = options.showBreadcrumb;
        }
    },

    /* Render */

    render: function () {

        if (this.collection) {
            this._markCommentsReadFlags();
        }

        // View attributes
        var attributes = {

            showBreadcrumb: this.showBreadcrumb,
            firstPage: this.firstPage,
            lastPage: this.lastPage,
            totalPages: this.totalPages,
            numberOfElements: this.numberOfElements,
            totalElements: this.totalElements,
            page: parseInt(this.page, 10)+1,
            prevPage: this.page > 0 ? parseInt(this.page, 10)-1 : 0,
            nextPage: this.page < this.totalPages-1 ? parseInt(this.page, 10)+1 : this.totalPages-1,
            onlyOnePage: this.firstPage && this.lastPage ? true : false,
            snapshotView: this.snapshotView

        };

        if (this.collection) {
            attributes = _.extend(attributes, { comments : this.collection.toJSON() });
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
        this.delegateEvents();
    
    },

    cNextPage: function () {

        this.page += 1;
        this.update();
    },

    cPrevPage: function () {

        this.page -= 1;
        this.update();
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

    update: function () {

        var self = this;

        if (this.page === undefined) {
            this.page = 0;
        }

        this.collection = new codebrowser.collection.CommentCollection(null, { page: this.page });

         // Fetch comments
        this.collection.fetch({

            cache: false,
            expires: 0,

            success: function (data, response) {

                self.firstPage = response.firstPage;
                self.lastPage = response.lastPage;
                self.totalPages = response.totalPages;
                self.nummberOfElements = response.numberOfElements;
                self.totalElements = response.totalElements;
                self.collection.reset(response.content);

                self.render();
            },

            error: function () {

                throw new Error('Failed comments fetch.');
            }
        });
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

                self.update();

            },

            error: function () {

                throw new Error('Failed comment delete.')
            }
        });
    }
});

