describe('ViewController', function () {

    it('active view is correct', function () {

        var view = codebrowser.controller.ViewController.view;

        expect(codebrowser.controller.ViewController.isActive(view)).toBeTruthy();
    });

    it('active view is incorrect', function () {

        var view = new codebrowser.view.RootView();

        expect(codebrowser.controller.ViewController.isActive(view)).toBeFalsy();
    });

    it('push should remove previous view', function () {

        var currentView = codebrowser.controller.ViewController.view;
        var view = new codebrowser.view.RootView();

        spyOn(currentView, 'remove');

        codebrowser.controller.ViewController.push(view);
        expect(currentView.remove).toHaveBeenCalled();
    });

    it('push should should change active view', function () {

        var view = new codebrowser.view.RootView();

        codebrowser.controller.ViewController.push(view);
        expect(codebrowser.controller.ViewController.isActive(view)).toBeTruthy();
    });

    it('push should not render new view', function () {

        var view = new codebrowser.view.RootView();

        spyOn(view, 'render');

        codebrowser.controller.ViewController.push(view);
        expect(view.render).not.toHaveBeenCalled();
    });

    it('push should render new view if requested', function () {

        var view = new codebrowser.view.RootView();

        spyOn(view, 'render');

        codebrowser.controller.ViewController.push(view, true);
        expect(view.render).toHaveBeenCalled();
    });
});
