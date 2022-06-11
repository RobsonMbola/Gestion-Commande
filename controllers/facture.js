const Facture =require("../models/facture")
const con = require("../config/Db")

exports.user = function(req,res){
    Facture.facture(con,req.params.user1,function(err,rows){
        res.send(rows)    
    }) 
}
exports.total = function(req,res){
    Facture.totalFacture(con,req.params.user,function(err,rows){
       res.send(rows)
   })
}