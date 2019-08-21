const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

/* Notes on Heroku deployment
* In order to deploy this project to Heroku, we must set up an mLab provision.
* mLab is remote MongoDB database that Heroku supports natively.
* 
* To get it running:
* 
* 1. Create a Heroku app in your project directory.
* 2. Run this command in your Terminal/Bash window:
* `heroku addons:create mongolab`
* This command will add the free mLab provision to your project.
*/

// If deployed, use the deployed database. Otherwise use the local storydb database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/storydb";
// mongoose.connect(MONGODB_URI);
// Or using promises
mongoose.connect(MONGODB_URI).then(

  () => { /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ 
  console.log("db connection successful")},
  err => { /** handle initial connection error */ console.log("db connection unsuccessful", err)}
);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
