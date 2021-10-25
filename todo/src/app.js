// importing express module
const express = require("express");
var session = require('express-session');
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const compression = require("compression");
const cors = require("cors");



// importing routes that will be serving client
const routes = require("./backend/routes/MainRoutes");  
var router = express.Router()

const app = express();

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());

app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(logger("dev"));

// Use the session middleware
app.use(
    session({
      secret: "KonfinitySecretKey",
      resave: false,
      saveUninitialized: false,
      cookie: {}
    })
  );

app.set("views",__dirname + "/client/views");

app.set(express.static(path.resolve(__dirname, "client")));

app.engine("html", require("ejs").renderFile); //Line2

app.set("view engine", "ejs"); //Line3

app.set('trust proxy', 1) // trust first proxy


app.use('/', routes);




// creating interaction on port 7000  
app.listen(7000, () => {
      console.log("Application listening on port : ", 7000);
    });
    
module.exports = app;

