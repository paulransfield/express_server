const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const TwitterStrategy = require('passport-twitter').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleid: profile.id });
      // check if we already have a record with the given profile ID
      if (existingUser) {
        return done(null, existingUser);
      }
      // otherwise save a new user nb ommitted else
      const user = await new User({
        googleid: profile.id,
        googledisplayName: profile.displayName,
        googleemails: JSON.stringify(profile.emails)
      }).save();
      done(null, user);
    }
  )
);
/*
passport.use(
  new TwitterStrategy(
    {
      clientID: keys.twitterClientID,
      clientSecret: keys.twitterClientSecret,
      callbackURL: '/auth/twitter/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ twitterid: profile.id });
      // check if we already have a record with the given profile ID
      if (existingUser) {
        return done(null, existingUser);
      }
      // otherwise save a new user nb ommitted else
      const user = await new User({
        twitterid: profile.id,
        twitterdisplayName: profile.displayName,
        twitteremails: JSON.stringify(profile.emails)
      }).save();
      done(null, user);
    }
  )
);
*/
