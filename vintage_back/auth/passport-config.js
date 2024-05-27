import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import User from '../models/User.js';
import dotenv from 'dotenv';
import MongoStore from 'connect-mongo';
import session from 'express-session';

dotenv.config();


passport.serializeUser((user, done) => {
  done(null, user.id); // Serialize only the user ID
});

// Corrected deserialization
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id); // Use findById to fetch the user
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:4000/auth/google/callback"
},
  async function (accessToken, refreshToken, profile, cb) {
    try {
      let user = await User.findOne({ googleId: profile.id });
      if (!user) {
        console.log(profile);
        // User not found, create a new one
        user = new User({
          googleId: profile.id,
          email: profile._json.email,
          name: profile.displayName,
          image: profile.picture
        });
      }

      await user.save();
      cb(null, user);
    } catch (err) {
      cb(err);
    }



  }
));