const express = require('express');
const router = express.Router();
const userRoutes = require("./user")


router.use("/api/users",userRoutes);



router.get("/", (req, res) => {
    res.send("hello");
  });
  

module.exports = router;