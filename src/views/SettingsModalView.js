codebrowser.view.SettingsModalView = Backbone.View.extend({

    id: 'settings-modal',
    className: 'modal fade hide',
    template: Handlebars.templates.SettingsModal,
    events: {
        'click #saveButton': 'updateApiUrl',
        'click #cancelButton': 'onCancelButton',
        'click #closeButton': 'onCancelButton',
        'click #checkButton': 'checkCapabilities',
        'click .toggleEnabled': 'toggleCapability',
        'keyup #apiUrl': 'onKeyUp',
        'click #applyButton': 'showCapabilityCheck'
    },


    initialize: function() {

        var capabilities = [
            {
                name: 'Comments',
                testUrl: 'comments',
                storageKey: 'config.comments',
                checked: false
            },
            {
                name: 'Tags',
                testUrl: 'tagnames',
                storageKey: 'config.tagnames',
                checked: false
            },
            {
                name: 'Tag categories',
                testUrl: 'tagcategories',
                storageKey: 'config.tagcategories',
                checked: false
            },
            {
                name: 'Student groups',
                testUrl: 'studentgroups',
                storageKey: 'config.studentgroups',
                checked: false
            }
        ];

        this.attributes = {

            apiUrl: config.api.main.root,
            capabilities: capabilities,
            applied: false

        };

        var backendChecked = localStorage.getItem('backendChecked');
        if (backendChecked !== 'true') {
            this.checkCapabilities();
        }
        else {
            capabilities.forEach(function(capability) {
                capability.status = localStorage.getItem(capability.storageKey) === 'true';
            })
        }

        this.render();

    },

    render: function () {

        // Template
        var output = this.template(this.attributes);

        this.$el.html(output);
        this.$el.modal({show:false});
        return this;

    },

    show: function() {

        this.$el.modal('show');

    },

    showCapabilityCheck: function() {

        var self = this;
        this.attributes.apiUrl = $('#apiUrl').val();
        this.attributes.applied = true;
        this.clearCapabilities();

        $('#capability-report').slideDown(function() {
            self.render();
        });

    },

    updateApiUrl: function () {

        var apiUrl = $('#apiUrl').val();
        localStorage.removeItem('backboneCache');
        localStorage.setItem('config.apiUrl', apiUrl);
        location.href = '.';

    },

    onCancelButton: function() {

        this.initialize();
        this.$el.modal('hide');
        this.render();

    },

    onKeyUp: function() {

        if (this.attributes.applied === true){
            $('#capability-report').slideUp();
        }

    },

    toggleCapability: function(ev) {

        var index = $(ev.target).data('index');
        var capability = this.attributes.capabilities[index];

        capability.status = !capability.status;
        localStorage.setItem(capability.storageKey, capability.status.toString());

    },

    clearCapabilities: function() {

        this.attributes.capabilities.forEach(function(capability) {
            capability.checked = false;
            capability.enabled = false;
        });

        this.render();

    },

    checkCapabilities: function() {

        var self = this;
        this.clearCapabilities();
        this.render();
        this.attributes.capabilities.forEach(function(capability) {
            self.checkCapability(capability);
        });

        localStorage.setItem('backendChecked', true);

    },

    checkCapability: function(capability) {

        var self = this;
        var apiRoot = this.attributes.apiUrl;

        $.ajax({

            async: false,
            url: apiRoot + capability.testUrl,
            type: capability.testUrl === 'comments' ? 'GET' : 'HEAD',

            success: function () {

                localStorage.setItem(capability.storageKey, true);
                capability.status = true;
                capability.checked = true;
                self.render();

            },

            error: function() {

                localStorage.setItem(capability.storageKey, false);
                capability.status = false;
                capability.checked = true;
                self.render();

            }

        });

    }

});
