codebrowser.controller.ViewController = {

    view: null,

    push: function (view, render) {

        // Already in view
        if (this.view === view) {
            return;
        }

        // Remove previous view
        if (this.view) {
            this.view.remove();
        }

        this.view = view;

        // Should render view
        if (render) {
            this.view.render();
        }

        // Set to container
        $(config.view.container).html(this.view.el);
    }
}
