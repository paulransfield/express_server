const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

//tell passport to use a new GoogleStrategy() constructor

passport.use(new GoogleStrategy());

app.get('/', (req, res) => {
  res.send({ hi: 'twitter #gotta.luv #code' });
});

//set up dynamic port binding from Heroku process environment variables
//OR default to 5000 for localhost development environment
const PORT = process.env.PORT || 5000;
app.listen(PORT);
