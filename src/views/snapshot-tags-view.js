codebrowser.view.SnapshotTagsView = Backbone.View.extend({

    id: 'snapshot-tags-container',
    template: Handlebars.templates.SnapshotTagsContainer,

    events: {

        'click [data-action="create-tag"]': 'createTag',
        'click [data-action="create-snapshot-tag"]': 'createSnapshotTag',
        'click [data-action="delete"]': 'delete'

    },

    collection: new codebrowser.collection.TagCollection(),

    /* Initialise */

    initialize: function () {

        this.render();
    },

    /* Render */

    render: function () {

        var self = this;

        var showSnapshotTags;

        this.collection.each(function(tag) {

            var visible = !tag.get('snapshot') || tag.get('snapshot').id === self.snapshot.id;
            tag.set('visible', visible);
            showSnapshotTags |= tag.get('snapshot') && visible;
        });

        // Template
        var context = { tags: this.collection.toJSON() };
        if (showSnapshotTags) {
            context.showSnapshotTags = true;
        }

        var output = $(this.template(context));

        this.$el.html(output);
    },

    /* Update */

    update: function (snapshot) {

        this.snapshot = snapshot;

        this.collection = new codebrowser.collection.TagCollection(null, { studentId: this.snapshot.get('studentId'),
                                                                           courseId: this.snapshot.get('courseId'),
                                                                           exerciseId: this.snapshot.get('exerciseId') });

        // Render on add and remove
        this.collection.on('add', $.proxy(this.render, this));
        this.collection.on('remove', $.proxy(this.render, this));

        var self = this;

        // Fetch tags
        this.collection.fetch({

            cache: false,
            expires: 0,

            success: function () {

                self.render();
            },

            error: function () {

                throw new Error('Failed tags fetch.');
            }
        });
    },

    /* Actions */

    createTag: function (event, snapshotTag) {

        event.preventDefault();

        var text = $('[data-id="tag"]', this.$el).val().trim();

        if (!text) {
            return;
        }

        var self = this;

        // Create new tag name if necessary.
        var tagName = codebrowser.model.TagName.findOrCreate({ name : text });

        // Create new tag
        var attribs = { tagName: tagName,
                        student: { id: self.snapshot.get('studentId') },
                        course: { id: self.snapshot.get('courseId') },
                        exercise: { id: self.snapshot.get('exerciseId') }};
        if (snapshotTag) {
            attribs.snapshot = { id: self.snapshot.id };
        }

        var tag = new codebrowser.model.Tag(attribs);

        // Save tag
        tag.save({ tagName: tagName }, {

            success: function () {

                self.collection.add(tag, { at: 0 });
            },

            error: function () {

                throw new Error('Failed tag save.');
            }
        });
    },

    createSnapshotTag: function (event) {
        this.createTag(event, true);
    },

    'delete': function (event) {

        var id = $(event.target).data('id');
        var tag = this.collection.get(id);

        var self = this;

        // Destroy tag
        tag.destroy({

            success: function () {

                // Remove from collection
                self.collection.remove(tag);
            },

            error: function () {

                throw new Error('Failed tag delete.')
            }
        });
    }
});
