casper.test.begin('Comments view', 10, function suite(test) {

    mockData = {
        'comments': {
            'content': [
                {
                    'id': 1,
                    'username': 'ElUser',
                    'comment': 'My awesome comment',
                    'createdAt': 1000,
                    'course': {'id': 2, 'name': 'course-2'},
                    'student': {'id': 1},
                    'exercise': {'id': 3, 'name': '3.TestExercise'},
                    'snapshot': {'id': 4}
                },{
                    'id': 2,
                    'username': 'Juuser',
                    'comment': 'Commenting your code',
                    'createdAt': 2000,
                    'course': {'id': 2, 'name': 'course-2'},
                    'student': {'id': 1},
                    'exercise': {'id': 5, 'name': '5.TestExercise'},
                    'snapshot': null
                }
            ],
            'totalPages': 6,
            'numberOfElements': 1,
            'totalElements': 2,
            'firstPage': true,
            'lastPage': false
        },
        'studentgroups': [],
        'tagnames': [],
        'tagcategories': []
    };

    casper.start('http://localhost:8000');

    casper.then(function() {

        this.clickLabel('Comments', 'a');
        this.waitForSelector('#comments-container');
    });

    casper.then(function () {

        test.assertUrlMatch(new RegExp('/#/comments$'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Comments', 'has "Comments" label active in the navbar');
        test.assertTextExists('Comments (2)', 'has title "Comments (2)"');

        test.assertElementCount('section article', 2, 'has exactly 2 comment listed');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/1/courses/2/exercises/3/snapshots/4">') !== -1,
            'has correct snapshot comment link to "3.TestExercise"');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/1/courses/2/exercises/5">') !== -1,
            'has correct solution comment link to "5.TestExercise"');


        test.assertSelectorHasText('section article:nth-of-type(1) h3 strong', 'Juuser', 'has correct username "Juuser" for newer comment');
        test.assertSelectorHasText('section article:nth-of-type(1) p', 'Commenting your code', 'has correct text "Commenting your code" for newer comment');

        test.assertSelectorHasText('section article:nth-of-type(2) h3 strong', 'ElUser', 'has correct username "ElUser" for older comment');
        test.assertSelectorHasText('section article:nth-of-type(2) p', 'My awesome comment', 'has correct text "My awesome comment" for older comment');
    });

    casper.run(function() {

        this.echo('');
        test.done();
    });
});
