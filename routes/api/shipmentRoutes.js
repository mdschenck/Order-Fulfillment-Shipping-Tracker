const router = require("express").Router();
// const app = require("express");
const { readFromFile, readAndAppend } = require("../../helpers/fsUtils");

router.get("/shipments", (req, res) => {
  fetch; // FETCH route for API Call?
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
  console.log("Shipments GET Route Called");
});

//--PUT ROUTE - FUTURE DEVELOPMENT?

// router.post("/notes", (req, res) => {
//   //   store.addNote(req.body);
//   //   res.json("post!");

//   const { title, text } = req.body;

//   if (req.body) {
//     const newNote = {
//       title,
//       text,
//       note_id: uuidv4(),
//     };
//     readAndAppend(newNote, "./db/db.json");
//     res.json(newNote);
//   } else {
//     res.error(`Error creating note.`);
//   }
// });

module.exports = router;
