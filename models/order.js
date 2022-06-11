
 const con = require ('../config/Db');
 module.exports = {
     get: function(con,cb){
         con.query("SELECT *FROM commande",cb)
     },
     getById: function(con,id,cb){
         con.query(`SELECT * FROM commande WHERE idCommande =${id}`,cb)
     },
     create:function(con,data,callback){
         con.query(`INSERT INTO commande SET
          numClient = '${data.user}',
          numProd ='${data.product}',
          qte= '${data.qty}',
          date='${data.date}'`,
          callback
          )
     },
     update: function(con,data,id,callback){
         con.query(`UPDATE commande SET 
         numClient = '${data.user}',
         numProd ='${data.product}',
         qte = '${data.qty}',
         date ='${data.date}'
         WHERE idCommande =${id}`,
         callback)
     },
     destroy: function(con,id,callback){
         con.query(`DELETE FROM commande WHERE idCommande= ${id}`,callback)
     },
     byUser : function(con,user,callback){
         con.query(`SELECT *FROM commande WHERE numClient='${user}'`,callback)
     },
     byDate : function(con,date1,date2,user,callback){
        con.query(`SELECT *FROM commande WHERE numClient='${user}' AND date BETWEEN '${date1}' AND '${date2}'`,callback)
    }
     
 }

 