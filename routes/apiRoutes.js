const router = require("express").Router();
// import fetch from 'node-fetch';
// const app = require("express");
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");

const credentials ='ZTFmNTQ1NWRlM2ZjNDcwNGE0OTJjMTI1MzYyMzc3ZGE6ZWRjZGNhYTQxYTcxNGMxMTljZGZlOWM0NjcxOTViNTY=';

var auth = { "Authorization" : `Basic ${credentials}` };



router.get("/shipments", (req, res) => {
  fetch(`https://ssapi.shipstation.com/shipments`, { headers : auth }); // FETCH route for API Call?
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
  console.log("Shipments GET Route Called");
  console.log(res.json)
  console.log(this.data)
});



router.get('/shipments/:shipDate', async (req, res) => {
  try {
    const uri = `https://ssapi.shipstation.com/shipments?shipDateStart=${req.params.shipDate}&shipDateEnd-${shipDateEnd}` 
    // { headers : auth }
    ;

    const response = await fetch(uri, {
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' }
    });

    return res.json(response);
    console.log(response);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});












// --- FROM Prioritizer: ----
// router.get("/shipments", async(req, res) => {
//   try {
//       // Get all proposal
//       const proposalData = await Proposal.findAll({});

//       // Serialize data so the template can read it
//       const proposals = proposalData.map((proposal) =>
//           proposal.get({ plain: true })
//       );

//       // Pass serialized data and session flag into template
//       res.render("proposals", {
//           proposals,
//           loggedIn: true,
//       });
//   } catch (err) {
//       res.status(500).json(err);
//   }
// });


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
