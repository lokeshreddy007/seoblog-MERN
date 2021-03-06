const { check } = require("express-validator");

exports.userSignupValidator = [
  check("name").not().isEmpty().withMessage("Name is Required"),
  check("email").isEmail().withMessage("Email is Required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password mush be atlest 6 character long"),
];

exports.userSigninValidator = [
  check("email").isEmail().withMessage("Email is Required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password mush be atlest 6 character long"),
];
