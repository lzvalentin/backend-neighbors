const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const bodyParser = require('body-parser');
const { User, Pet, Comment } = require("../models");
=======
const {User, Pet, Comment, Post, Payment} = require('../models');
>>>>>>> dev
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtAuthMid = require("../utlis/tokenAuth.js");
const stripe = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

//stripe.setApiVersion(config.stripe.apiVersion);

// GET all users  AND  their comments
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
<<<<<<< HEAD
      include: [Comment],
=======
      include: [Comment, Pet, Post, Payment]
>>>>>>> dev
    });
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(err);
  }
});
// POST Login
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((dbUser) => {
      if (!dbUser) {
        return res.status(403).send("invalid credentials");
      }
      if (bcrypt.compareSync(req.body.password, dbUser.password)) {
        const token = jwt.sign(
          {
            userId: dbUser.id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "2h",
          }
        );
        res.json({
          token: token,
          user: dbUser,
        });
      } else {
        return res.status(403).send("invalid credentials");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
// POST New User
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
    });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", jwtAuthMid, async (req, res) => {
  try {
<<<<<<< HEAD
    const me = await User.findOne({
      where: {
        id: req.user,
      },
      include: [Comment],
    });
    res.json(me);
    // console.log(me)
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
=======
      const me = await User.findOne({
          where:{
              id:req.user
          },
          include:[Comment, Pet, Post, Payment]
      })
      res.json(me);
      // console.log(me)
  } catch(err){
      console.log(err);
      res.status(500).json({err})
>>>>>>> dev
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
