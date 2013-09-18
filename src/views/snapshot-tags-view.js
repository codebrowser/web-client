codebrowser.view.SnapshotTagsView = Backbone.View.extend({

    id: 'snapshot-tags-container',
    template: Handlebars.templates.SnapshotTagsContainer,

    events: {

        'click [data-action="create"]': 'create',
        'click [data-action="delete"]': 'delete'

    },

    collection: new codebrowser.collection.TagCollection(),

    /* Initialise */

    initialize: function () {

        this.render();
    },

    /* Render */

    render: function () {

        // Template
        var output = $(this.template({ tags: this.collection.toJSON() }));

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

    create: function (event) {

        event.preventDefault();

        var text = $('[data-id="tag"]', this.$el).val().trim();

        if (!text) {
            return;
        }

        var self = this;

        // Create new tag name if necessary.
        var tagName = codebrowser.model.TagName.findOrCreate({ name : text });

        // New tag
        var tag = new codebrowser.model.Tag({ tagName: tagName,
                                              student: {id: self.snapshot.get('studentId')},
                                              course: {id: self.snapshot.get('courseId')},
                                              exercise: {id: self.snapshot.get('exerciseId')}});

        // Save tag
        tag.save({ tagName: tagName }, {

            success: function () {

                // Add to collection
                self.collection.add(tag, { at: 0 });
            },

            error: function () {

                throw new Error('Failed tag save.');
            }
        });
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
