const passport = require('passport');
const strategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

require('dotenv').config();
const User = require('../models/User');

module.exports = Passport =>{
    passport.use(new Strategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/users/login/callback',
        proxy: true
    }, (accessToken, refreshToken, profile, done) =>{
        const newUser = {
            googleID: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value
        }
        User.findOne({ googleID: profile.id }).then(user =>{
            if(user){
                return done(null, user);
            }
            else {
                User.create(newUser).then(user =>{
                    return done(null, user);
                })
            }
        })
    }))
}
