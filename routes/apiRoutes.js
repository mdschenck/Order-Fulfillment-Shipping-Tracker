const router = require("express").Router();
const fetch = require("node-fetch");
const app = require("express");
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");

const credentials ='ZTFmNTQ1NWRlM2ZjNDcwNGE0OTJjMTI1MzYyMzc3ZGE6ZWRjZGNhYTQxYTcxNGMxMTljZGZlOWM0NjcxOTViNTY=';

var auth = { "Authorization" : `Basic ${credentials}` };

router.get("/shipments", (req, res) => {
  fetch(`https://ssapi.shipstation.com/shipments`, { headers : auth })
  // .then(res => res.text())
  // .then(text => console.log(text))
  .then(res => res.json(res))
  .then(json => console.log(json))
   // FETCH route for API Call?
   console.log("GET Shipments Route Called")

   res.json.forEach(
      console.log(res.shipment.orderNumber)
    );
});


router.get("/shipments/:shipDate", (req, res) => {
  fetch(`https://ssapi.shipstation.com/shipments?shipDateStart=${req.params.shipDate}&shipDateEnd=${req.params.shipDate}&pageSize=500`, { headers : auth })
  .then(res => res.json(res))
  .then(res => console.log(res))
  // .then(json => console.log(json)); 
  console.log("Get Shipments By shipDate Route Called");

  // res.json.forEach(
  //   console.log(res.orderNumber)
  // );

  // Data Needed:
  // orderNumber
  // trackingNumber
  // weight.value (in Ounces / 16 trim to 2 digits)
  // shipDate 
  // shipmentItems: ??

  

});



// router.get('/shipments/:shipDate', async (req, res) => {
//   try {
//     const uri = `https://ssapi.shipstation.com/shipments?shipDateStart=${req.params.shipDate}&shipDateEnd-${req.params.shipDate}` 
//     { headers : auth }
//     ;

//     const response = await fetch(uri, {
//       method: 'GET',
//       mode: 'cors',
//       headers: { 'Content-Type': 'application/json' }
//     });

//     console.log("Get Shipment by shipDate Called")
//     console.log(response);

//     return res.json(response);

//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('server error');
//   }
// });












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
