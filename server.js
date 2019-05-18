const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const passport = require("passport");
const users = require("./routes/api/users");

const app = express();

//Body Parser set up
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

//DB connect/config
const db = require("./config/keys").mongoURI;

//connect to DB
mongoose
.connect(db,{useNewUrlParser: true})
.then(() => console.log("connected to the DB"))
.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);




app.listen(port, ()=> console.log(`server listening on port ${port}!`));
