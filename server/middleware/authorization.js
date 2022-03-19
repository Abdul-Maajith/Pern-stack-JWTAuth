const jwt = require("jsonwebtoken");
require("dotenv").config();

// JWT is not used to pass the secret, it is used to verify the person who is using our app is real or fake.
module.exports = async (req, res, next) => {
  // Get token from header
  const token = req.header("token");

  // Check if token is available on client side or not!
  if (!token) {
    return res.status(403).json({ msg: "authorization denied" });
  }

  // to check whether the loggedIn token is valid (or) not!
  try {
    //it is going to give use the user id (user:{id: user.id})
    const verify = jwt.verify(token, process.env.jwtSecret);

    req.user = verify.user; //user = user_id
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
