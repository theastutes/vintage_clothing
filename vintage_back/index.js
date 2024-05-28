
import bodyParser from "body-parser";
import userRoutes from "./routes/user_routes.js";
import prodRoutes from "./routes/prod_routes.js"
import cors from "cors";
import express from 'express';
import mongoose from "mongoose";
import session from "express-session";
import cartRoutes from "./routes/cart_routes.js"
import passport from "passport";
import './auth/passport-config.js';
import MongoStore from "connect-mongo";
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT = 4000;


const corsOptions = {
  origin: 'https://localhost:4000', // Replace with your frontend's origin
  credentials: true, // Allow cookies and authentication headers
};

//Middleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});
app.use(cors(corsOptions));



//MoongoDB connection
mongoose.connect("mongodb+srv://projectyjka:53yjka21@asciicluster0.pgohfwc.mongodb.net/test").then(
  console.log("Connection successful to DB")
).catch(
  (error) => {
    console.log("db connection error here--", error)
  }
);

app.use(session({
  secret: 'MySecret', resave: false, saveUninitialized: true,
  cookie: {
    maxAge: 36000 * 24,
  },
  store: MongoStore.create({
    mongoUrl: 'mongodb+srv://projectyjka:53yjka21@asciicluster0.pgohfwc.mongodb.net/test',

  }),
  touchAfter: 24 * 36000

}));
app.use(passport.initialize());
app.use(passport.session());

//Authentication
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log(req.session);
    console.log(req.sessionID)
    const userSession = req.session ? JSON.stringify(req.session) : "No Session Data";
    //res.redirect('http://localhost:3000/')
    res.send(userSession);
    console.log(res.cookie);
  });

app.get('/logout', function (req, res) {
  req.session.destroy((err) => {
    if (err) {
      // Handle the error case
      console.error('Session destruction error:', err);
    } else {
      // clear the cookie on the client side
      res.clearCookie('connect.sid'); // Replace 'connect.sid' with your session cookie's name
      res.send('Session destroyed and user logged out');
    }
    res.redirect('/');
  });
});

app.get("/login/user", function (req, res) {
  const sesion = req.user;

  res.status(200).json(sesion);

})

//Mount routes
app.use("/api/users", userRoutes);

app.use("/api/products", prodRoutes);

app.use("/api/cart", cartRoutes);

//Start server
app.listen(PORT, () => {
  console.log(`Server is running on post ${PORT}`);
})




