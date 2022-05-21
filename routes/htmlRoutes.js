const path = require("path");
const htmlRouter = require("express").Router();

// Notes HTML Route
htmlRouter.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// 404 Error HTML Route
htmlRouter.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/404.html"));
});

module.exports = htmlRouter;
