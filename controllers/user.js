const User =require("../models/user")
const con =require("../config/Db")
    
exports.index =  function(req,res){
            User.get(con,function(err,rows){
                res.send(rows)    
            })
        }
exports.create = function(req,res){
            
}
exports.store= function (req,res){
          
            User.create(con,req.body,function(err){ 
            })
        }
exports.edit= function(req,res){
            User.getById(con,req.params.id, function(err,rows){
                res.send(rows[0])
              
            })
        }
exports.update= function(req,res){
   
            User.update(con,req.body,req.params.id, function(err){ 
            })
        }
 exports.destroy=function(req,res){
            User.destroy(con,req.params.id, function(err){
               
            })
        }
    exports.search=function(req,res){
            
            User.search(con,req.params.user,function(err,rows){
               res.send(rows)
           

            })
        }
    