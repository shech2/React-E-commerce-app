import express from "express";
import { Data } from "./data.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());

app.get("/data", (req, res) => {
    res.send(Data);
}
);

app.listen(3001, () => {
    console.log("Server started on port 3001");
}
);

/*sss*/
