codebrowser.view.TagCategoriesView = Backbone.View.extend({

    id: 'tagcategories-container',
    template: Handlebars.templates.TagCategoriesContainer,

    events: {
        'click [data-action="create-category"]': 'createTagCategory',
        'click [data-action="delete-category"]': 'deleteTagCategory'
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

    createTagCategory: function (event) {

        event.preventDefault();

        var text = $('[data-id="category"]', this.$el).val().trim();

        if (!text) {
            return;
        }

        var self = this;

        var existing = self.collection.where({ name: text });

        //If no category with same name, add new
        if (existing.length === 0) {

            var tagCategory = new codebrowser.model.TagCategory({ name: text });

            tagCategory.save( {}, {

                success: function () {

                    self.collection.add(tagCategory);
                    self.render();
                    $('[data-id="category"]').focus();

                },

                error: function () {

                    throw new Error('Failed tag category save.');
                }
            });

        } else {

            self.render();
            $('[data-id="category"]').focus();

        }
    },

    deleteTagCategory: function (event) {
        var id = $(event.target).data('id');
        var category = this.collection.get(id);

        var self = this;

        // Destroy tag Category
        category.destroy({

            success: function () {
                // Remove from collection
                self.collection.remove(category);
                self.render();
            },

            error: function () {

                throw new Error('Failed to delete Tag Category')
            }
        });
        
    }
});
