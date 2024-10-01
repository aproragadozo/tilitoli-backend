const express = require('express');
const app = express();
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json({extended: false}));
app.use(cors());

// CORS

var corsOptions = {
  origin: 'https://tilitoli-backend-production.up.railway.app/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.get("/tilitoli", cors(corsOptions), (req, res) => {
  console.log(JSON.stringify(req.body));
  res.json({message: "Hello from backend!"});
  
})
/* post for later
app.post('/', function(req, res, next) {
 // Handle the post for this route
});
*/

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});