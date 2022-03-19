const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); //req.body
app.use(cors());

// Middlewares.
 

// Routes.
app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
    console.log(`Server is listening on the port 5000`);
})

// Flowchart:
// 1) Setting the database(create table, insertion of values).

// 2) Bulding Registration route and encyrpting the password, insert the newUser into the database & Generating a jwt token - last

// 3) creating a jwtGenerator with user_id as payload(we can access it by req.user) and has a secret password. Generating Jwt token in login router is more important than register router.

//  > As we'll be checking the presence of JwtToken in login router - by searching the jwtToken in localStorage and it must be passed on to server through the header.

// We also must clear the jwtToken in localStorage after logOut!

// 4) Building Login Route, verification of the password & Generating a jwt token.

// 5) creating a Middleware for Verifying the email and JWTtoken with secret

// 6) Building private route for "isVerified and dashboard". We must provide the token in header to get an access! - both
