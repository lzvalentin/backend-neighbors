const router = require("express").Router();
<<<<<<< HEAD
const {Payment} = require("../models");
const stripe = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const bodyParser = require('body-parser');
=======
const {Payment, User} = require("../models");
>>>>>>> dev

// List all payments,
// Create a payment
// Read a payment
// update a payment

// List all payments

router.get("/", async (req, res) => {
  try {
      console.log("getRoutes")
    const paymentData = await Payment.findAll({
      include: [User]
    });
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


// // get all balances

router.get("/", async (req, res) => {
  try {
    const balanceData = await Balance.findAll({});
    if (!balanceData) {
      res.status(404).json({ message: "No balance with this id!" });
      return;
    }
    res.status(200).json(balanceData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Create PaymentIntent with  paymentMethod.
router.post("/create-payment-intent", async (req, res) => {
  const { paymentMethodType, currency } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000,
      currency: currency,
      payment_method_types: [paymentMethodType],
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(400).json({ error: { message: err.message } });
  }
});

// router.get("/config", async (req, res) => {
//   res.json({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY });
// });

router.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err) {
      console.log("Error message: ${err.message}");
      return res.status(400).send("Webhook Error: ${err.message}");
    }
    if (event.type === "payment_intent.created") {
      const paymentIntent = event.data.object;
      console.log(
        "[${event.id}] PaymentIntent (${paymentIntent.id}) : ${paymentIntent.status}"
      );
    }
    res.json({ received: true });
  }
);



module.exports = router;
