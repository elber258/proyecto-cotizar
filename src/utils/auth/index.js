const passport = require('passport');
const jwtStrategy = require('./authregulator');

passport.use(jwtStrategy)