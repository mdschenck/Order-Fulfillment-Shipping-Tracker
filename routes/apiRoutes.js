const router = require("express").Router();
const fetch = require("node-fetch");
const app = require("express");
const fs = require('fs');
const converter = require("json-2-csv");
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
const { Console } = require("console");
const { reset } = require("nodemon");

// SHIPSTATION API CREDENTIALS (BASIC Auth)
const credentials ='ZTFmNTQ1NWRlM2ZjNDcwNGE0OTJjMTI1MzYyMzc3ZGE6ZWRjZGNhYTQxYTcxNGMxMTljZGZlOWM0NjcxOTViNTY=';

// SET THE RESPONSE PAGE SIZE HERE:
const responsePageSize = 5;

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

  let i = 0;
  let j = 1;
  let k = 2;

  fetch(`https://ssapi.shipstation.com/shipments?shipDateStart=${req.params.shipDate}&shipDateEnd=${req.params.shipDate}&includeShipmentItems=true&pageSize=${responsePageSize}`, { headers : auth })
  .then(res => res.json(res))


  // Convert Needed Response Parameters Into New JSON:

  // .then(res => JSON.parse(`
  //   {
  // "Order Number":"` + res.shipments[i].orderNumber + `", 
  // "Ship Date":"` + res.shipments[i].shipDate + `", 
  // "Tracking Number":"` + res.shipments[i].trackingNumber + `", 
  // "Weight":"` + res.shipments[i].weight.value + `", 
  // "Item":"` + res.shipments[i].shipmentItems[1] + `",
  // "Recipient Name":"` + res.shipments[i].shipTo.name + `"}
  // `
  // ))



  // .then(res => console.log(`
  // "Order Number":"` + res.shipments[i].orderNumber + `", \n
  // "Ship Date":"` + res.shipments[i].shipDate + `", \n
  // "Tracking Number":"` + res.shipments[i].trackingNumber + `", \n
  // "Weight":"` + res.shipments[i].weight.value + `", \n
  // "Item":"` + res.shipments[i].shipmentItems[1] + `", \n
  // "Recipient Name":"` + res.shipments[i].shipTo.name + `"`
  // ))


  // console.log("Get Shipments By shipDate Route Called");

  // console.log(res.shipments[0].orderNumber)
.then(res => {
const shipments = [
{
"orderNumber": `${res.shipments[i].orderNumber}`, 
"shipDate": `${res.shipments[i].shipDate}`,
"TrackingNumber": `${res.shipments[i].trackingNumber}`, 
"Weight": `${res.shipments[i].weight.value}`, 
"Item": `${res.shipments[i].shipmentItems[1]}`, 
"RecipientName": `${res.shipments[i].shipTo.name}`
},
{
"orderNumber": `${res.shipments[j].orderNumber}`, 
"shipDate": `${res.shipments[j].shipDate}`,
"TrackingNumber": `${res.shipments[j].trackingNumber}`, 
"Weight": `${res.shipments[j].weight.value}`, 
"Item": `${res.shipments[j].shipmentItems[1]}`, 
"RecipientName": `${res.shipments[j].shipTo.name}`
},
{
"orderNumber": `${res.shipments[k].orderNumber}`, 
"shipDate": `${res.shipments[k].shipDate}`,
"TrackingNumber": `${res.shipments[k].trackingNumber}`, 
"Weight": `${res.shipments[k].weight.value}`, 
"Item": `${res.shipments[k].shipmentItems[1]}`, 
"RecipientName": `${res.shipments[k].shipTo.name}`
 }
];

console.log(shipments)


  converter.json2csv(shipments, (err, csv) => {
    if (err) {
        throw err;
    }

    // print CSV string
    console.log(csv);

    // write CSV to a file
    fs.writeFileSync(`Shipments_${req.params.shipDate}.csv`, csv);

    });
  });



  // res.json.forEach(
  //   console.log(res.orderNumber)
  // );

  // Data Needed:
  // orderNumber
  // trackingNumber
  // weight.value (in Ounces / 16 trim to 2 digits)
  // shipDate 
  // shipmentItems: ??


  if (res) {
    console.log("Success!")
    // window.location.assign= "../public/success"
    // window.location.assign("/success");
  } else {
    console.log("Error processing request- Please try again")
    location.assign= "../public/error"
  }
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
