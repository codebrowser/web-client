codebrowser.view.TagNamesView = Backbone.View.extend({

    id: 'tagnames-container',
    template: Handlebars.templates.TagNamesContainer,

    events: {

        'click [data-action="search"]':                 'filterTagListsByName',
        'keyup [data-id="query-string"]':               'filterTagListsByName',
        'keypress [data-id="query-string"]':            'filterTagListsByName',
        'click [data-action="delete-from-category"]':   'deleteTagFromCategory',
        'click #downloadTagListJson':                   'download',
        'click [data-action="add-to-category"]':        'addTagToCategory',
        'click .toggle-add':                            'toggleAdd',
        'mouseenter .up-scroll':                        'scrollTimer',
        'mouseenter .down-scroll':                      'scrollTimer',
        'mouseout .up-scroll':                          'clearScrollTimer',
        'mouseout .down-scroll':                        'clearScrollTimer',
        'dragstart td.link':                            'drag',
        'dragend *:not("p.tag-category")':              'endDrag',
        'drop p.tag-category':                          'dropAndAddToCategory',
        'dragover p.tag-category':                      'allowDropping'

    },

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            snapshotTagNames: this.snapshotTagNames.toJSON(),
            exerciseAnswerTagNames: this.exerciseAnswerTagNames.toJSON(),
            
            
        }

        if (this.unusedTagNames) {
            attributes = _.extend(attributes, { unusedTagNames : this.unusedTagNames.toJSON() });
        }

        if (this.tagCategory) {
            attributes = _.extend(attributes, { tagCategory: this.tagCategory.toJSON() });
        }
        
        if (this.tagCategories) {
            attributes = _.extend(attributes, { tagCategories: this.tagCategories.toJSON() });
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);

        this.delegateEvents();
    },

    filterTagListsByName: function () {

        if (!this.filterHelper) {

            var filterOptions = {

                'rowSelector' : '.double-list-left table tbody tr, .double-list-right table tbody tr',
                'containerSelector' : '#' + this.id
            };

            this.filterHelper = new codebrowser.helper.ListViewFilter(filterOptions);
        }

        this.filterHelper.filterList();
    },

    download: function () {

        var self = this;

        var tagNames = new codebrowser.collection.TagNameCollection();

        tagNames.fetch({

            cache: false,
            expires: 0,

            success: function () {

                var blob = new Blob([self._generateJson(tagNames)], {type: 'application/json'});
                saveAs(blob, 'tags.json');
            }
        });

        return false;
    },

    _generateJson: function (tagNames) {

        var output = [];

        tagNames.each(function (tagName) {
            var students = {};
            var exercises = {};

            tagName.get('tags').forEach(function (tag) {

                students[tag.student.name] = true;
                exercises[tag.exercise.name] = true;
            });

            output.push({
                tag: tagName.get('name'),
                students: Object.keys(students),
                exercises: Object.keys(exercises)
            });
        });

        return JSON.stringify(output);
    },

    addTagToCategory: function (event) {

        event.preventDefault();

        var id = event.target.id;

        if (!id) {
            return;
        }

        // Find tag that is being added.
        var tagName = codebrowser.model.TagName.findOrCreate({ id : id });

        var tagNames = this.tagCategory.get('tagnames');
        
        tagNames.push(tagName);

        this.tagCategory.set('tagnames', tagNames);

        var self = this;

        this.tagCategory.save({}, {

            success: function () {

                self.unusedTagNames.remove(tagName);
                self.snapshotTagNames.fetch({ success : function() { self.render(); } });
                self.exerciseAnswerTagNames.fetch({ success : function() { self.render(); } });
            },

            error: function () {

                throw new Error('Adding tag to category failed.');
            }
        });

    },

    deleteTagFromCategory: function (event) {
        var id = $(event.target).data('id');

        if (!id) {
            return;
        }

        var tagName = codebrowser.model.TagName.findOrCreate({ id : id });

        var tagNames = this.tagCategory.get('tagnames');
        
        var index = tagNames.indexOf(tagName);

        if ( index > -1 ) {
            tagNames.splice(index, 1);
        }

        this.tagCategory.set('tagnames', tagNames);

        var self = this;

        this.tagCategory.save({}, {

            'tagid': id,

            success: function () {

                self.unusedTagNames.fetch({ success : function() { self.render(); } });
                self.snapshotTagNames.fetch({ success : function() { self.render(); } });
                self.exerciseAnswerTagNames.fetch({ success : function() { self.render(); } });
            },

            error: function () {

                throw new Error('Removing tag from category failed.');
            }
        });
    },

    toggleAdd: function () {

        $('.toggle-add').toggleClass('open');
        $('.toggle-add').toggleClass('close');
        $('.tags').slideToggle();
    },

    allowDropping: function (event) {

        event.preventDefault();
    },

    drag: function (event) {

        this.draggedTagnameId = event.currentTarget.id;

        var left = ((document.width-$('.add-to-categories').width())/2)-150;
        var top = (document.height-$('.add-to-categories').height())/2
        $('.add-to-categories').css({ 'display': 'block', 'left': left +'px', 'top': top + 'px' });

    },

    endDrag: function (event) {

        event.preventDefault();
        $('.add-to-categories').css({ 'display': 'none' });

    },

    dropAndAddToCategory: function (event) {

        event.preventDefault();

        $('.add-to-categories').css({ 'display': 'none' });

        var tagName = codebrowser.model.TagName.findOrCreate({ id : this.draggedTagnameId });

        var targetCategoryId = event.currentTarget.id;
        var tagCategory = codebrowser.model.TagCategory.findOrCreate({ id : targetCategoryId }, { create : false });

        var tagNames = tagCategory.get('tagnames');
        tagNames.push(tagName);
        tagCategory.set('tagnames', tagNames);

        tagCategory.save({}, {

            success: function () {
                $('.add-message').css({ display: 'block'});
                $('.add-message').empty().append('Added tag '+ tagName.id + ' into category '+tagCategory.id);
                $('.add-message').delay(800).fadeOut();

            },

            error: function () {

                throw new Error('Adding tag to category failed.');
            }
        });

    },

    scrollCategoriesDown: function () {

        var categories = $('.category-list');
        var curTop = categories.scrollTop();
        categories.scrollTop(curTop+1);

    },

    scrollCategoriesUp: function () {

        var categories = $('.category-list');
        var curTop = categories.scrollTop();
        categories.scrollTop(curTop-1);

    },

    scrollTimer: function (event) {

        event.preventDefault();

        if (event.currentTarget.classList[1] === 'down-scroll') {

            this.repeater = setInterval(this.scrollCategoriesDown, 10);
        }
        else if (event.currentTarget.classList[1] === 'up-scroll') {

            this.repeater = setInterval(this.scrollCategoriesUp, 10);
        }
    },

    clearScrollTimer: function() {

        clearInterval(this.repeater);
    }

});
