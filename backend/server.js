import express from "express";
import { data } from "./data.js";


const app = express();

app.get("/hw", (req, res) => {
    res.send(data["name"]);
}
);

app.listen(3001, () => {
    console.log("Server started on port 3001");
}
);

/*sss*/
