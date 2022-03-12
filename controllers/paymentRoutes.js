const router = require("express").Router();
const {Payment} = require("../models");

// List all payments,
// Create a payment
// Read a payment
// update a payment

// List all payments

router.get("/", async (req, res) => {
  try {
      console.log("getRoutes")
    const paymentData = await Payment.findAll({});
    if (!paymentData) {
      res.status(404).json({ message: "No payment with this id!" });
      return;
    }
    res.status(200).json(paymentData);
  } catch (error) {
      console.log(error)
    res.status(500).json(error);
  }
});

// Create a payment

router.post("/", async (req, res) => {
  try {
    console.log("postRoute");
    const paymentData = await Payment.create(req.body);
    console.log(paymentData);
    res.status(200).json(paymentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update a payment

router.put("/:id", async (req, res) => {
  try {
    const paymentData = await Payment.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true,
    });
    if (!paymentData[0]) {
      res.status(404).json({ message: "No payment  with this id!" });
      return;
    }
    res.status(200).json(paymentData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Get payment by id
router.get("/:id", async (req, res) => {
  try {
    const paymentData = await Payment.findByPk(req.params.id);
    if (!paymentData) {
      res.status(404).json({ message: 'No payment with this id!' });
      return;
    }
    res.status(200).json(paymentData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//  payment by id
//delete

module.exports = router;
