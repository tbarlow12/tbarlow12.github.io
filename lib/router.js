var csCourseList = [
    {
        classNum: 1030,
        title: 'Intro to Computer Science',
        prereqs: []
    },
    {
        classNum: 1410,
        title: 'Intro to OOP',
        prereqs: [1030]
    },
    {
        classNum: 2420,
        title: 'Intro to Algorithms and Data Structures',
        prereqs: [1410]
    },
    {
        classNum: 3500,
        title: 'Software Practice',
        prereqs: [2420]
    }
];


Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'homepage'});
Router.route('/build-my-course', {name: 'buildMyCourse'});
Router.route('/build-my-course/:major', {
    name: 'majorCourses',
    data: function () {
        return csCourseList;
    }
});