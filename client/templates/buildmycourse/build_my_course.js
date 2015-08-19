var majorList = [
    {
        major: 'CS'
    }
];

Template.buildMyCourse.helpers({
    majors: function () {
        return majorList;
    }
});