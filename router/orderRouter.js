const express = require("express");
//const { Product } = require("../models/product");
const orderRouter = express.Router();
const {index,store,edit,update,destroy,byUser,byDate} = require("../controllers/order");



orderRouter.get("/",index);
orderRouter.post("/",store);
orderRouter.get("/user/:user",byUser)
orderRouter.get("/user/:date1/:date2/:user",byDate)
orderRouter.get("/:id/edit",edit);
orderRouter.put("/:id",update);
orderRouter.delete("/:id",destroy);
module.exports= orderRouter;