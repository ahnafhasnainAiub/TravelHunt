const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
 };

 module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
 };

 // Show All
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing  = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
     })
     .populate("owner");
    //using flash for error mssg show
    if(!listing){
      req.flash("error","Listing you reqested for does not exist!");
      res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", {listing});
 };


 //Create Lsiting
 module.exports.createListing = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
  
    const newListings = new Listing(req.body.listing);
    newListings.owner = req.user._id;
    newListings.image = { url, filename };

    await newListings.save();
    req.flash("success", "New Listing Created!!"); //session-flash
    res.redirect("/listings");
};

//Edit Listing
module.exports.editListing = async (req, res) => {
    let { id } = req.params;
    const listing  = await Listing.findById(id);
    //using flash for error mssg show
    if(!listing){
    req.flash("error","Listing you reqested for does not exist!");
    res.redirect("/listings");
  }
    
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

//Delete Listing
module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    let deletedListings = await Listing.findByIdAndDelete(id);
    console.log(deletedListings);
    req.flash("success", "Listing Deleted!!"); //session-flash
    res.redirect("/listings");
};

//Update Listing
module.exports.updateListing = async (req, res) => {
     let { id } = req.params;
     let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
     
     if( typeof req.file !== "undefined" )
     {
       let url = req.file.path;
       let filename = req.file.filename;
       listing.image = { url, filename };
       await listing.save();
     }
     
     req.flash("success", "Listing Updated"); //session-flash
     res.redirect("/listings");
};