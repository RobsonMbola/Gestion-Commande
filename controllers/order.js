const Order =require("../models/order")
const Product = require("../models/product")
const con =require("../config/Db")
    
exports.index =  function(req,res){
            Order.get(con,function(err,rows){
                res.send(rows)   
            })  
        }
exports.store= function (req,res){
            Order.create(con,req.body,function(err){ 
            })
        }
exports.edit= function(req,res){
            Order.getById(con,req.params.id, function(err,rows){
                res.send(rows[0])
              
            })
        }
exports.update= function(req,res){
   
            Order.update(con,req.body,req.params.id, function(err){ 
            })
        }
exports.destroy=function(req,res){
            Order.destroy(con,req.params.id, function(err){
               
            })
        }
exports.byUser = function(req,res){
    Order.byUser(con,req.params.user,function(err,rows){
        res.send(rows)
       
    })
}
exports.byDate = function(req,res){
    Order.byDate(con,req.params.date1,req.params.date2,req.params.user,function(err,rows){
        res.send(rows)
    })
}

    