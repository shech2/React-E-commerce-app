import express from "express";
import { Data } from "./data.js";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

// Dotenv:
dotenv.config();

// mongoDB connection:
mongoose.connect(process.env.MONGO_CONNECTION, () => {
    try {
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error.message);
    }
});

// exprees use:
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// body-parser use:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// cors use:
app.use(cors());

//Routers:
import productRouter from "../backend/src/routers/product.js";
app.use("/", productRouter);


app.get("/data", (req, res) => {
    res.send(Data);
}
);


app.post("/add-to-cart", (req, res) => {
    console.log(req.body);
    res.send(req.body);
}
);



app.listen(3001, () => {
    console.log("Server started on port 3001");
}
);
