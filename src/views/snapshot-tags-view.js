codebrowser.view.SnapshotTagsView = Backbone.View.extend({

    id: 'snapshot-tags-container',
    template: Handlebars.templates.SnapshotTagsContainer,

    events: {

        'click [data-action="create"]': 'create',
        'click [data-action="delete"]': 'delete'

    },

    model: new codebrowser.collection.TagCollection(),

    /* Initialise */

    initialize: function () {

        this.render();
    },

    /* Render */

    render: function () {

        // Template
        var output = $(this.template({ tags: this.model.toJSON() }));

        this.$el.html(output);
    },

    /* Update */

    update: function (snapshot) {

        this.snapshot = snapshot;

        this.model = new codebrowser.collection.TagCollection(null, { studentId: this.snapshot.get('studentId'),
                                                                      courseId: this.snapshot.get('courseId'),
                                                                      exerciseId: this.snapshot.get('exerciseId') });

        // Render on add and remove
        this.model.on('add', $.proxy(this.render, this));
        this.model.on('remove', $.proxy(this.render, this));

        var self = this;

        // Fetch tags
        this.model.fetch({

            cache: true,
            expires: 120,

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

        // New tag
        var tag = new codebrowser.model.Tag(null, { studentId: this.snapshot.get('studentId'),
                                                    courseId: this.snapshot.get('courseId'),
                                                    exerciseId: this.snapshot.get('exerciseId') });

        var self = this;

        // Save tag
        tag.save({ text: text }, {

            success: function () {

                // Push to collection
                self.model.push(tag);
            },

            error: function () {

                throw new Error('Failed tag save.');
            }
        });
    },

    'delete': function (event) {

        var id = $(event.target).data('id');
        var tag = this.model.get(id);

        var self = this;

        // Destroy tag
        tag.destroy({

            success: function () {

                // Remove from collection
                self.model.remove(tag);
            },

            error: function () {

                throw new Error('Failed tag delete.')
            }
        });
    }
});
