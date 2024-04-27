const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/travel";

main()
.then(() => {
    console.log("DB connected")
})
.catch((err) => {
    console.log(err);
});
async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  
  //Owner of the post
  initData.data = initData.data.map((obj) => (
    { ...obj, 
      owner: "6615a673f8230dbe8bb180bf" }
   )); 
  
   await Listing.insertMany(initData.data);
   console.log("Data was initialized");
};

initDB();