
 const con = require ('../config/Db');
 module.exports = {
     get: function(con,cb){
         con.query("SELECT  *FROM client",cb)
     },
     getById: function(con,id,cb){
         con.query(`SELECT * FROM client WHERE idClient =${id}`,cb)
     },
     create:function(con,data,callback){
         con.query(`INSERT INTO client SET
          numClient ='${data.number}',
          nom = '${data.name}'`,
          callback
          )
     },
     update: function(con,data,id,callback){
        
         con.query(`UPDATE client SET 
         numClient ='${data.number}',
         nom = '${data.name}'
         WHERE idClient=${id}
         `,
         callback)
     },
     destroy: function(con,id,callback){
        
         con.query(`DELETE FROM client WHERE idClient= ${id}`,callback)
     },
     search: function(con,user,callback){
        con.query(`SELECT *FROM Client WHERE nom LIKE '${user}%' or numClient LIKE  '${user}%'`,callback)
     }
 }

 