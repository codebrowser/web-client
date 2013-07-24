// googletesting.js
casper.test.begin('PhantomJS homepage has correct title', 1, function suite(test) {

    casper.start("http://www.phantomjs.org", function() {
        test.assertTitle("PhantomJS: Headless WebKit with JavaScript API", "PhantomJS homepage title is as expected");
    });

    casper.run(function() {
        test.done();
    });
});
