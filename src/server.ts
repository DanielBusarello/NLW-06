import "reflect-metadata";
import express from "express";

const app = express();

app.get("/test", (req, res) => {
    return res.send("Hello World");
});

app.listen(3003, () => console.log('Server is running - port 3003'));