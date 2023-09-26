const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/view/home.html"));
});

app.get("/view/login.html", (req,res) => {
    res.sendFile(path.join(__dirname, "/view/login.html"));
});

app.get("/view/register.html", (req,res) => {
    res.sendFile(path.join(__dirname, "/view/register.html"));
});

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});
