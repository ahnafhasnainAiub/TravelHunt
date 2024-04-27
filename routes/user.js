const express =  require("express");
const router = express.Router();
const User = require("../models/user.js");
const asyncWrap = require("../utils/asyncWrap");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

router
  .route("/signup")
  .get(userController.signUp)
  .post(asyncWrap (userController.signupPost));

router
  .route("/login")
  .get(userController.loginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    userController.loginSuccess
);

 //Logout
 router.get("/logout", userController.logOut);

module.exports = router;
 
  //Signup
// router.get("/signup", userController.signUp);

// router.post("/signup", asyncWrap (userController.signupPost));

 //Sign-In
//  router.get("/login", userController.loginForm);
 
//  router.post(
//     "/login",
//     saveRedirectUrl,
//     passport.authenticate("local", {
//         failureRedirect: "/login",
//         failureFlash: true,
//     }),

//     userController.loginSuccess
//  );
  
