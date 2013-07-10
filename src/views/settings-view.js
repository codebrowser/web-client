codebrowser.view.SettingsView = Backbone.View.extend({

    id: 'settings-container',

    template: {

        settingsContainer: Handlebars.templates.SettingsContainer

    },
    
    events: {
        
        'click #settings': 'settings'
    },
    
    initialize: function (options) {
        
        this.parentView = options.parentView;
    },

    /* Render */

    render: function () {

        // Template for settings container
        var settingsContainerOutput = $(this.template.settingsContainer());
        
        // Update settings container
        this.$el.html(settingsContainerOutput);
    },
            
    settings: function () {

        // Set font size
        var font = $('#font-size option:selected').val();
        localStorage.setItem('font-size', font);
        
        // Re-configure editors
        config.editor.configure(this.parentView.mainEditor);
        config.editor.configure(this.parentView.sideEditor);
    }
});
