codebrowser.view.TagNamesView = Backbone.View.extend({

    id: 'tagnames-container',
    template: Handlebars.templates.TagNamesContainer,

    events: {

        'click [data-action="search"]':             'filterTagListsByName',
        'keyup [data-id="query-string"]':           'filterTagListsByName',
        'keypress [data-id="query-string"]':        'filterTagListsByName',
        'click #downloadTagListJson':               'download',
        'click [data-action="add-to-category"]':    'addTagToCategory',
        'click .toggle-add':                        'toggleAdd'
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

    toggleAdd: function () {

        $('.toggle-add').toggleClass('open');
        $('.toggle-add').toggleClass('close');
        $('.tags').slideToggle();
    }

});
