codebrowser.view.CommentsView = Backbone.View.extend({

    id: 'comments-container',
    template: Handlebars.templates.CommentsContainer,

    /* Render */

    render: function () {

        this._markCommentsReadFlags();

        // View attributes
        var attributes = {

            comments: this.collection.toJSON()

        };

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
    },

    _markCommentsReadFlags: function () {

        var commentsRead = this._getCommentsRead();
        var commentIds = [];

        this.collection.each(function(comment) {

            var id = comment.get('id');

            var read = (commentsRead.indexOf(id) > - 1);

            comment.set('read', read, {silent: true});

            commentIds.push(id);
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
    }
});

