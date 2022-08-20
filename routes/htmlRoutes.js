const path = require("path");
const htmlRouter = require("express").Router();


// Home HTML Route
htmlRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Notes HTML Route
htmlRouter.get("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/success.html"));
});

htmlRouter.get("/error", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/error.html"));
});


htmlRouter.get("/shipments/2022-08-18", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});


// 404 Error HTML Route
htmlRouter.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/404.html"));
});

module.exports = htmlRouter;
