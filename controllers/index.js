const express = require('express');
const router = express.Router();
const userRoutes = require("./user")


router.use("/api/users",userRoutes);



router.get("/", (req, res) => {
    res.send("hello from controllers index");
  });
  

module.exports = router;