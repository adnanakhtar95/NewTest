var express = require("express")
const axios = require('axios')
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 
const mark = "ETH_BTC";
// app.get("/url", (request, response, next) => {
//   axios
//   .get('http://api.p2pb2b.io/api/v2/public/ticker', {
//     // market: 'ETH_BTC'
//     params: {
//       mark: mark
//       }
//   })
//   .then(res => {
//     response.json(res.data.result)
//   })
//   .catch(error => {
//     console.error(error)
//   })
//  });


app.post("/url", (req, res) => { 


 var relsut =  axios
    .get('http://api.p2pb2b.io/api/v2/public/ticker', {
      // market: 'ETH_BTC'
      params: {
        market: req.market
        }
    })
    .then(rees => {
      response.json(rees.data.result)
    })
    .catch(error => {
      console.error(error)
    })
    
    return res.status(201).send({ success: "true", message: " executed successfully", relsut, });
  
  
 
 
});
app.listen(8080, () => {
  console.log("Server running on port 3000")
 });
 
  //  return res.status(201).send({ success: "true", message: "", mark, });});