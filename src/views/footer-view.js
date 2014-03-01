codebrowser.view.FooterView = Backbone.View.extend({

    id: 'footer-container',
    template: Handlebars.templates.Footer,
    events: {
        'click #settingsModalButton': 'openModal'
    },

    initialize: function() {

        this.modalView = new codebrowser.view.SettingsModalView();
        this.render();

    },

    render: function () {

        // Template
        this.$el.html(this.template());
        return this;

    },

    openModal: function() {

        this.modalView.show();

    }

});
