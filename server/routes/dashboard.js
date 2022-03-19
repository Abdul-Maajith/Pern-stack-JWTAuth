const router = require("express").Router();
const pool = require("../db");
const Authorization = require("../middleware/authorization");

// We must provide the token in header to get an access!
router.post("/", Authorization, async (req, res) => {
    try {
        // req.user has the payload
        // res.json(req.user);

        const user = await pool.query(
          "SELECT user_name FROM users WHERE user_id = $1",
          [req.user]
        );
        
        res.json(user.rows[0]);

    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error!");
    }
});

module.exports = router;