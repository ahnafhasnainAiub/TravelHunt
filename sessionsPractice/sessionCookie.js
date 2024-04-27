const express = require("express");
const app = express();
const path = require("path");
const session =  require("express-session");
const flash = require("connect-flash");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
   secret: "mysupersecretstring",
   resave: false,
   saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

//middleWARE
app.use((req, res, next) => {
   res.locals.successMsg = req.flash("success");
   res.locals.errorMsg = req.flash("error");
   next();
});

//localhost:3000/register?name=Ahnaf
app.get("/register", (req, res) => {
   let { name = "Anonymous" } = req.query;
   req.session.name = name;
   
   if(name == "Anonymous"){
     req.flash("error", "User not registered!");
   }else {
    req.flash("success", "User in registered!");
   }
   res.redirect("/hello");
});

app.get("/hello", (req, res)=> {
    res.render("page.ejs", { name: req.session.name });
  });
  
  
app.listen(3000, () => {
    console.log("Server is listening to port 3000");
  });