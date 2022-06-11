const Product =require("../models/product")
const con =require("../config/Db")
    
exports.index =  function(req,res){
            Product.get(con,function(err,rows){
                res.send(rows)   
            })
        }
exports.create = function(req,res){
            
}
exports.store= function (req,res){
        
           Product.create(con,req.body,function(err){ 
            })
        }
exports.edit= function(req,res){
            Product.getById(con,req.params.id, function(err,rows){
                res.send(rows[0])
              
            })
        }
exports.update= function(req,res){
   
            Product.update(con,req.body,req.params.id, function(err){ 
            })
        }
exports.destroy=function(req,res){
            Product.destroy(con,req.params.id, function(err){
               
            })
        }  
exports.getOldStock = function(req,res){
     Product.getOldStock(con,req.params.product,function(err,rows){
         res.send(rows)
     })
 }
 exports.updateStock = function(req,res){
     Product.updateStock(con,req.params.product,req.body,function(err){
     })
 }
    
    
