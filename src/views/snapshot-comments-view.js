codebrowser.view.SnapshotCommentsView = Backbone.View.extend({

    id: 'snapshot-comments-container',
    template: Handlebars.templates.SnapshotCommentsContainer,

    newCommentType: 'solution',

    collection:  new codebrowser.collection.CommentCollection(),

    events: {

        'click [data-action="create-comment"]': 'createComment',
        'click [data-action="solution-comment"]': 'solutionComment',
        'click [data-action="snapshot-comment"]': 'snapshotComment',
        'click span.next': 'nextPage',
        'click span.prev': 'prevPage'

    },

    /* Initialise */

    initialize: function () {

        this.render();
    },

    /* Render */

    render: function () {

        var attributes = {

            username: Utils.getLocalStorageValue('username', 'AnonymousJack'),
            comments: this.collection.toJSON(),

        };

        var output = $(this.template(attributes));

        this.$el.html(output);

        this._renderCommentsView();
    },

    nextPage: function () {

        this.page += 1;
        this.update(this.snapshot);
    },

    prevPage: function () {

        this.page -= 1;
        this.update(this.snapshot);
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

        if (this.page === undefined) {
            this.page = 0;
        }

        this.collection = new codebrowser.collection.CommentCollection(null, { studentId: this.snapshot.get('studentId'),
                                                                           courseId: this.snapshot.get('courseId'),
                                                                           exerciseId: this.snapshot.get('exerciseId'),
                                                                           snapshotId: this.snapshot.get('id'),
                                                                           page: this.page });
        var self = this;

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
                self.update(self.snapshot);
            },

            error: function () {

                throw new Error('Failed comment save.')
            }
        });

        this._resetForm();
    },

    solutionComment: function () {

        this.newCommentType = 'solution';
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

        this.commentsView = new codebrowser.view.CommentsView({

            showBreadcrumb: false,
            collection: this.collection,
        });

        this.commentsView.firstPage = this.firstPage;
        this.commentsView.lastPage = this.lastPage;
        this.commentsView.totalPages = this.totalPages;
        this.commentsView.numberOfElements = this.numberOfElements;
        this.commentsView.totalElements = this.totalElements;
        this.commentsView.page = parseInt(this.page, 10);
        this.commentsView.prevPage = this.page > 0 ? parseInt(this.page, 10)-1 : 0;
        this.commentsView.nextPage = this.page < this.totalPages-1 ? parseInt(this.page, 10)+1 : this.totalPages-1;
        this.commentsView.onlyOnePage = this.firstPage && this.lastPage ? true : false;
        this.commentsView.snapshotView = true;
        this.$el.append(this.commentsView.el);

        this.commentsView.render();
    },

    _removeCommentsView: function () {

        if (this.commentsView) {

            this.commentsView.remove();
        }
    }
});
