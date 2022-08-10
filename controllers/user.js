const Profile = require('../models/Profile');
const User = require('../models/User');

exports.saveUser = (req, res, next) => {
    const username = req.params.username;
    const pwd = req.params.pwd;

    const user = new User({username: username, pwd: pwd});

    user
    .save()
    .then(result => {
        console.log("User saved");
    });
};

exports.createProfile = (req, res, next) => {
    const firstname = req.params.firstname;
    const surname = req.params.surname;
    const gender = req.params.gender;
    const email = req.params.email;
    
    const profile = new Profile({
        firstname: firstname, 
        surname: surname, 
        gender: gender, 
        email: email
    });

    profile
    .save()
    .then(result => {
        console.log("Profile created");
    })
    .catch(err => {
        console.log(err);
    });
}