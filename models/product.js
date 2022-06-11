
 const con = require ('../config/Db');
 module.exports = {
     get: function(con,cb){
         con.query("SELECT *FROM produit",cb)
     },
     getById: function(con,id,cb){
         con.query(`SELECT * FROM produit WHERE idProd =${id}`,cb)
     },
     create:function(con,data,callback){
         con.query(`INSERT INTO produit SET
          numProduit ='${data.name}',
          design = '${data.design}',
          pu='${data.price}',
          stock='${data.stock}'`,
          callback
          )
     },
     update: function(con,data,id,callback){
        
         con.query(`UPDATE produit SET 
         numProduit ='${data.name}',
         design = '${data.design}',
          pu='${data.price}',
          stock='${data.stock}'
          WHERE idProd =${id}
         `,
         callback)
     },
     destroy: function(con,id,callback){
         
         con.query(`DELETE FROM produit WHERE idProd= ${id}`,callback)
     },
     updateStock: function(con,product,data,callback){
        con.query(`UPDATE produit SET 
         stock='${data.stock}'
         WHERE numProduit ='${product}'
        `,
        callback)
     },
     getOldStock : function(con,product,callback){
            con.query(`SELECT stock FROM produit  WHERE numProduit ='${product}'`,callback)
     }
 }

 