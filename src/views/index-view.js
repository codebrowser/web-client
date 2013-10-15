codebrowser.view.IndexView = Backbone.View.extend({

    el:'#main-container',

    render: function() {

        this.$('#footer-container').html((this.footer = new codebrowser.view.FooterView()).render().el);
        return this;

    },

    renderChild: function(view) {

        if(this.child) {
            this.child.remove();
        }
        
        this.$('#container').html((this.child = view).render().el);

    }

});