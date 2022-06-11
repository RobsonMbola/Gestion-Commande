const express = require("express");
const factureRouter = express.Router();
const {total,user} = require("../controllers/facture");


factureRouter.get("/:user1",user);
factureRouter.get("/totalFacture/:user",total);
module.exports = factureRouter;