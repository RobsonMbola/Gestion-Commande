const express = require("express");
const CARouter = express.Router();
const {totalAllCA,allCA,CAByDate,totalCAByDate,CAByUser} = require("../controllers/chiffreAff");


CARouter.get("/",allCA);
CARouter.get("/:user",CAByUser);
CARouter.get("/totalCA",totalAllCA);
CARouter.get("/totalCA/:date",totalCAByDate);
CARouter.get("/:date",CAByDate);
module.exports = CARouter;