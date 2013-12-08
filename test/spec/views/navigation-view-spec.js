describe('Navigation view', function () {

    var navigationView = new codebrowser.view.NavigationView();

    it('should have correct id', function () {

        expect(navigationView.id).toEqual('navigation-container');
    });

    it('should have correct template', function () {

        expect(navigationView.template).toBe(Handlebars.templates.Navigation);
    });

    it('should not have tour enabled', function () {

        expect(navigationView.tourEnabled).toBe(false);
    });

    it('should not have start tour callback', function () {

        expect(navigationView.startTourCallback).toBe(null);
    });

    it('should have tour enabled and start tour callback after enableTour called', function () {

        var navigationView = new codebrowser.view.NavigationView();
        var callback = function() {};

        navigationView.enableTour(callback);

        expect(navigationView.tourEnabled).toBe(true);
        expect(navigationView.startTourCallback).toBe(callback);
    });


    it('should not have tour enabled and start tour callback after disableTour called', function () {

        var navigationView = new codebrowser.view.NavigationView();
        navigationView.enableTour(function() {});

        navigationView.disableTour();

        expect(navigationView.tourEnabled).toBe(false);
        expect(navigationView.startTourCallback).toBe(null);
    });
});
