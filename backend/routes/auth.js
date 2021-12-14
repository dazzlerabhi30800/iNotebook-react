const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'Abhiisaprogramm$er';

// Create a user using : POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name!").isLength({ min: 3 }),
    body("email", "Enter a valid email!").isEmail(),
    body("password", "Passwords must at least 5 characters!").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // if there are errors, return Bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check whether the user with thisemial exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt) 
      // Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id : user.id
        }
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({authToken});
      

      // .then(user => res.json(user))
      // .catch(err => {console.log(err)
      // res.json({error : 'Please enter a unique value of email!', message : err.message})});
      // res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Something went wrong!");
    }

    // res.send(req.body);
  }
);

module.exports = router;
