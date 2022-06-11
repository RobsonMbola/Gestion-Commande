const express = require("express");
const productRouter = express.Router();
const {index,store,edit,getById,update,destroy,getOldStock,updateStock} = require("../controllers/product");



productRouter.get("/",index);
productRouter.get("/:product",getOldStock);
productRouter.put("/:product",updateStock);
productRouter.post("/",store);
productRouter.get("/:id/edit",edit);
productRouter.put("/:id",update);
productRouter.delete("/:id",destroy);
module.exports= productRouter;





