let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let jwt = require('jsonwebtoken');
let DB = require('../config/db');

// create the User Model instance
let userModel = require('../models/user');
let User = userModel.User; // alias

module.exports.displayHomePage = (req, res, next) => {
    res.render('home', {title: 'Home',displayName:req.user ? req.user.displayName : ''});
}

// added Credits page 
module.exports.displayCreditsPage = (req, res, next) => {
    res.render('credits', {title: 'Credits', displayName:req.user ? req.user.displayName : ''});
}

// added Contacts page 
module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', {title: 'Contacts', displayName:req.user ? req.user.displayName : ''});
}

/* Authentication */
module.exports.displayLoginPage = (req, res, next) => {
    // check if the user is already logged in
    if (!req.User) {
        res.render('auth/login', {
            title: 'Login',
            messages: req.flash("loginMessage"),
            displayName: req.User ? req.user.displayName :"",
        })
    } else {
        return res.redirect("/");
    }
};


module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
        (err, user, info) => {
            // server err?
            if (err) {
                return next(err);
            }
            // is there a user login?
            if (!user) {
                req.flash('loginMessage', 'Authentication Error');
                return res.redirect('/login');
            }
            req.login(user, (err) => {
                // server error?
                if (err) {
                    return next(err);
                }

                const payload = {
                    id: user._id,
                    displayName: user.displayName,
                    username: user.username,
                    email: user.email
                }

               /* const authToken = jwt.sign(payload, DB.Secret, {
                    expiresIn: 604800 
                });*/

               
                return res.redirect('/survey-list');
            });
        })(req, res, next);
}

module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is not already logged in
    if(!req.User){
        res.render('auth/register',{

            title : 'Register',
            messages : req.flash('loginMessage')
            
        })
    }
        else{
            return res.redirect('/');
        
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    // instantiate a user object
    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log("Error: Inserting New User");
            if (err.name == "UserExistsError") {
                req.flash(
                    'registerMessage',
                    'Registration Error: User already Exists!'
                );
                console.log('Error: User Already Exist!')
            }
            return res.render('auth/register', {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        } else {
            //if no error exists, then registration is successful

            //redirect the user add authenticate them

            /* TODO - Getting Ready to convert to API

            res.json({ success: true, msg: 'User Registered Successfully!' });
            */

            return passport.authenticate('local')(req, res, () => {
                res.redirect('survey-list')
            });
        }
    });
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
} 
