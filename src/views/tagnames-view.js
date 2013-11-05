codebrowser.view.TagNamesView = Backbone.View.extend({

    id: 'tagnames-container',
    template: Handlebars.templates.TagNamesContainer,

    events: {
        'click [data-action="search"]':       'filterTagListsByName',
        'keyup [data-id="query-string"]':     'filterTagListsByName',
        'keypress [data-id="query-string"]':  'filterTagListsByName',
        'click #downloadTagListJson':         'download',
    },

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            snapshotTagNames: this.snapshotTagNames.toJSON(),
            exerciseAnswerTagNames: this.exerciseAnswerTagNames.toJSON()

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
    }
});
