codebrowser.model.TagCategory = Backbone.RelationalModel.extend({

    urlRoot:  config.api.main.root + 'tagcategories',

    sync: function(method, model, options) {

		if (options.tagid) {
			options.url = config.api.main.root + 'tagcategories/' + this.id + '/tagnames/' + options.tagid;
		}

		return Backbone.sync(method, model, options);
	}

});
