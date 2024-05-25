import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import User from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();

passport.serializeUser((user, done) => {
  const newUser = {
    id:user._id,
    name:user.name,
    email:user.email

  }
  done(null, newUser);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
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