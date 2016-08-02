import { Meteor } from 'meteor/meteor';

Router.configure({
    loadingTemplate: 'loadingWheel'
});

Router.route('/', {
    name: 'home',
    template: 'outline',
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser) {
            console.log(currentUser);
            console.log(Meteor.users.findOne(currentUser).location);
            Router.go(Meteor.users.findOne(currentUser).location);
            this.next();
        } else {
            this.render("login");
        }
    },
    waitOn: function() {
        return true;
    }
});

