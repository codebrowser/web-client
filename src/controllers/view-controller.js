codebrowser.controller.ViewController = {

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
