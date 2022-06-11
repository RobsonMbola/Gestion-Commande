const express = require("express");

const userRouter = express.Router();
const {index,create,store,edit,getById,update,destroy,search} = require("../controllers/user");

userRouter.get("/",index);
userRouter.get("/search/:user",search);
userRouter.post("/",store);
userRouter.get("/:id/edit",edit);
userRouter.put("/:id",update);
userRouter.delete("/:id",destroy);
module.exports= userRouter;