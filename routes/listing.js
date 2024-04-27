const express =  require("express");
const router = express.Router();
const asyncWrap = require("../utils/asyncWrap.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const multer  = require('multer');

const {storage} = require("../cloudConfig.js");

const upload = multer({ storage });

const listingController = require("../controllers/listings.js");

//Router.Route for Index Route and Create Route 
  router
   .route("/")
   .get(asyncWrap(listingController.index))
   .post(
        isLoggedIn,  
        upload.single("listing[image]"),
        validateListing,
        asyncWrap(listingController.createListing)
     );

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//
router
  .route("/:id")
  .get(asyncWrap (listingController.showListing))
  .put(
       isLoggedIn, 
       isOwner, 
       upload.single("listing[image]"),
       validateListing, 
       asyncWrap(listingController.updateListing))
  .delete(isLoggedIn, isOwner, asyncWrap (listingController.deleteListing));
  

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, asyncWrap(listingController.editListing));
 

module.exports = router;
  

  //Index Route Listings
// router.get("/", asyncWrap(listingController.index));

// //Show Route
// router.get("/:id", asyncWrap (listingController.showListing));

//Create Route with Schema Validation
// router.post("/", isLoggedIn, validateListing, asyncWrap(listingController.createListing));

// //Delete Route
// router.delete("/:id", isLoggedIn, isOwner, asyncWrap (listingController.deleteListing));

