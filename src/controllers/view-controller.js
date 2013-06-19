codebrowser.controller.ViewController = {

    view: null,

    isActive: function (view) {

        return this.view === view;
    },

    pushToView: function (view, render) {

        // Remove previous view
        if (this.view) {
            this.view.remove();
        }

        this.view = view;

        // Should render view
        if (render) {
            this.view.render();
        }
    }
}
