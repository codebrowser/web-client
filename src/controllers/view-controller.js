codebrowser.controller.ViewController = {

    activeView: null,

    pushToView: function (View, properties, classProperties) {

        if (this.activeView) {
            this.activeView.remove();
        }

        this.activeView = new View(properties, classProperties);

        return this.activeView;
    }
}
