import bodyParser from "body-parser";
import userRoutes from "./routes/user_routes.js";
import prodRoutes from "./routes/prod_routes.js"
import cors from "cors";
import express from 'express';
import mongoose from "mongoose";
import cartRoutes from "./routes/cart_routes.js"


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


//Mount routes
app.use("/api/users", userRoutes);

app.use("/api/products", prodRoutes);

app.use("/api/cart",cartRoutes);
//Start server
app.listen(PORT, () => {
    console.log(`Server is running on post ${PORT}`);
})