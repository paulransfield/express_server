const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
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
      const existingUser = await User.findOne({ appid: profile.id });
      // check if we already have a record with the given profile ID
      if (existingUser) {
        return done(null, existingUser);
      }
      // otherwise save a new user nb ommitted else
      const user = await new User({
        appid: profile.id,
        apptype: 'google',
        appdisplayName: profile.displayName,
        appemails: JSON.stringify(profile.emails)
      }).save();
      done(null, user);
    }
  )
);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitterClientID,
      consumerSecret: keys.twitterClientSecret,
      callbackURL: '/auth/twitter/callback',
      proxy: true,
      includeEmail: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ appid: profile.id });
      // check if we already have a record with the given profile ID
      if (existingUser) {
        return done(null, existingUser);
      }
      // otherwise save a new user nb ommitted else
      const user = await new User({
        appid: profile.id,
        apptype: 'twitter',
        appdisplayName: profile.displayName,
        appemails: profile.emails[0].value
      }).save();
      done(null, user);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['id', 'name'],
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ appid: profile.id });
      // check if we already have a record with the given profile ID
      if (existingUser) {
        return done(null, existingUser);
      }
      // otherwise save a new user nb ommitted else
      const user = await new User({
        appid: profile.id,
        apptype: 'facebook',
        appdisplayName: profile.name.givenName + ' ' + profile.name.familyName
      }).save();
      done(null, user);
    }
  )
);
