codebrowser.view.TagCategoriesView = Backbone.View.extend({

    id: 'tagcategories-container',
    template: Handlebars.templates.TagCategoriesContainer,

    events: {
        'click [data-action="create-category"]': 'createTagCategory'
    },

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            tagCategories: this.tagCategories.toJSON(),

        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);

        this.delegateEvents();
    },

    createTagCategory: function (event, tagCategory) {

        event.preventDefault();

        var text = $('[data-id="category"]', this.$el).val().trim();

        if (!text) {
            return;
        }

        var self = this;

        // Create new tag category if necessary.
        tagCategory = new codebrowser.model.TagCategory({ name: text });

        tagCategory.save( {}, {

            success: function () {

                self.collection.add(tagCategory);
                self.render();
            },

            error: function () {

                throw new Error('Failed tag category save.');
            }
        });


    }
});
