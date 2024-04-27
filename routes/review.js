const express =  require("express");
const router = express.Router({ mergeParams: true });
const asyncWrap = require("../utils/asyncWrap.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { validateReview, isLoggedIn, isAuthor } = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");
  
//Review - Post Route
router.post("/", isLoggedIn, validateReview, asyncWrap(reviewController.createReview));


//Review route delete
router.delete("/:reviewId", isLoggedIn, isAuthor, asyncWrap(reviewController.deleteReview));

module.exports = router;