
const express = require("express")
const app = express()
const bodyParser = require("body-parser");
 const path = require ("path")
 const con = require("./config/db.js")
 const cors = require ('cors');
 app.use(cors());
 app.use(bodyParser.json())
 app.set("views",path.join(__dirname, "views"))
 app.set("view engine","ejs")

 //connecting route to database

 app.use(function(req,res,next){
     req.complete = con
     next()
 })

 //parsing body request
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 //app.use(methodeOverride("_method"))

 //include router
 const product = require("./router/productRouter")
 const user = require("./router/userRouter")
 const order = require("./router/orderRouter")
 const chiffreA = require("./router/chiffreAffRouter")
 const facture = require("./router/factureRouter")

 //routing
 app.use("/product",product)
 app.use("/user",user)
 app.use("/CA",chiffreA)
 app.use("/facture",facture)
 app.use("/order",order)

 //starting server

 app.listen(5000,function(){
     console.log("Server listening on port 5000")
 })