codebrowser.view.SettingsModalView = Backbone.View.extend({

    id: 'settings-modal',
    className: 'modal fade hide',
    template: Handlebars.templates.SettingsModal,

    attributes: {

        'data-backdrop': 'false'

    },

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
                testMethod: 'GET',
                storageKey: 'config.comments'
            },
            {
                name: 'Tags',
                testUrl: 'tagnames',
                testMethod: 'HEAD',
                storageKey: 'config.tagnames'
            },
            {
                name: 'Tag categories',
                testUrl: 'tagcategories',
                testMethod: 'HEAD',
                storageKey: 'config.tagcategories'
            },
            {
                name: 'Student groups',
                testUrl: 'studentgroups',
                testMethod: 'HEAD',
                storageKey: 'config.studentgroups'
            },
            {
                name: 'Concepts',
                testUrl: ['students', 'courses', 'exercises', 'concepts'],
                testMethod: 'recursive',
                storageKey: 'config.concepts'
            }
        ];

        capabilities.forEach(function(capability) {
            capability.error = 'Not checked yet';
            capability.checked = false;
        });

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

    onKeyUp: function(event) {

        if (event.keyCode === 13) { // user pressed enter
            this.showCapabilityCheck();
        }
        else if (this.attributes.applied === true){
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

        if (capability.testMethod === 'recursive') {
            this.recursiveCheck(capability);
        }
        else {
            this.simpleCheck(capability);
        }


    },

    simpleCheck: function(capability) {

        var self = this;
        var apiRoot = this.attributes.apiUrl;

        $.ajax({

            async: false,
            url: apiRoot + capability.testUrl,
            type: capability.testMethod,

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
    },

    recursiveCheck: function(capability) {

        var self = this;
        var url = this.attributes.apiUrl;

        var breakLoop = false;

        capability.testUrl.forEach(function(urlPart, index) {

            if (!breakLoop) {

                url += index === 0 ? urlPart : '/' + urlPart;

                $.ajax({

                    async: false,
                    url: url,
                    type: 'GET',

                    success: function (data) {

                        if (index === capability.testUrl.length - 1) {
                            localStorage.setItem(capability.storageKey, true);
                            capability.status = true;
                            capability.checked = true;
                            self.render();
                        }
                        else {
                            if (data.length > 0) {

                                url += '/' + data[0].id;
                            }
                            else {
                                capability.status = false;
                                capability.checked = false;
                                capability.error = 'Back-end didn\'t have enough data to test this feature. URL ' + url + 'returned an empty response';
                            }

                        }

                    },

                    error: function() {

                        localStorage.setItem(capability.storageKey, false);
                        capability.status = false;
                        capability.checked = true;
                        capability.error = 'GET-request to ' + url + ' failed!';
                        self.render();
                        breakLoop = true;

                    }

                });
            }
        })
    }

});
