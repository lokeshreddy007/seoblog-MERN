const express = require("express");
const router = express.Router();
const { signup, signin, signout, requireSign } = require("../controllers/auth");

// validators
const { runValidation } = require("../validators/index");
const {
  userSignupValidator,
  userSigninValidator,
} = require("../validators/auth");

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/signin", userSigninValidator, runValidation, signin);
router.get("/signout", signout);

// test
router.get("/secret", requireSign, (req, res) => {
  res.json({ message: "you have a acess to secret page" });
});

module.exports = router;
