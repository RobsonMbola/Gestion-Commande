const ChiffreAff =require("../models/chiffreAff")
const con =require("../config/Db")

exports.allCA = function(req,res){
    ChiffreAff.allChiffreAff(con,function(err,rows){
        res.send(rows)
        
    })  
}
exports.totalAllCA = function(req,res){
    ChiffreAff.totalAllChiffreAff(con,function(err,rows){
       res.send(rows)
   })
}
exports.CAByDate = function(req,res){ 
    ChiffreAff.chiffreAffByDate(con,req.params.date,function(err,rows){
        res.send(rows)
    })
    
}
exports.totalCAByDate = function(req,res){
    ChiffreAff.totalChiffreAffByDate(con,req.params.date,function(err,rows){
       res.send(rows)
   })
}
