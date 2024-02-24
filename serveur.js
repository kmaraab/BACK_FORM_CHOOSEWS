require('dotenv').config();
const express = require("express");
const http = require('http');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 7070;

// Importation des differentes routes
const userRouteur = require("./routes/User/user");
 
// exporte les requetes en json dans le body
app.use(express.json());

// Gestion du cors (requêtte depuis des url inconnue);
const cors = require('cors');
const corsOptions = {
  origin: `${process.env.APP_URL}`
};

app.use(cors(corsOptions));
// app.use(cors());

app.use('/', [userRouteur]);


server.listen(port, (err)=>{
  if(err) console.log(err.message)
  console.log(`Running on port ${port}`);
})
