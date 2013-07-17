codebrowser.view.EditorSettingsView = Backbone.View.extend({

    id: 'editor-settings-container',
    template: Handlebars.templates.EditorSettingsContainer,

    events: {

        'click [data-id="save"]': 'save'

    },

    /* Initialise */

    initialize: function (options) {

        this.parentView = options.parentView;

        this.render();
    },

    /* Render */

    render: function () {

        var ignoreEmptyLines = localStorage.getItem(config.storage.setting.editor.ignoreEmptyLines);
        var fontSize = parseInt(localStorage.getItem(config.storage.setting.editor.fontSize), 10);

        // Template
        var output = $(this.template());

        // Restore ignore empty lines
        if (ignoreEmptyLines) {
            $('[data-id="ignore-empty-lines"]', output).prop('checked', ignoreEmptyLines === 'true');
        }

        // Restore font size
        if (fontSize) {
            $('[data-id="font-size"] option[value="' + fontSize + '"]', output).prop('selected', true);
        }

        this.$el.html(output);
    },

    /* Actions */

    save: function () {

        // Ignore empty lines
        localStorage.setItem(config.storage.setting.editor.ignoreEmptyLines, $('[data-id="ignore-empty-lines"]').prop('checked'));

        // Set font size
        localStorage.setItem(config.storage.setting.editor.fontSize, $('[data-id="font-size"] option:selected', this.$el).val());

        // Configure
        this.parentView.configure();

        // Update
        this.parentView.update(this.parentView.previousModel, this.parentView.model);
    }
});