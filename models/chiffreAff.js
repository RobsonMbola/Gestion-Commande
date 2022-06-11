const con = require ('../config/Db');
 module.exports = {
     allChiffreAff: function(con,callback){   
    con.query(`select client.numClient as client,nom,sum(qte*pu) as CA from client,produit,commande where client.numClient=commande.numClient and commande.numProd=produit.numProduit  group by client.numClient,nom`,callback)   
 },
 totalAllChiffreAff: function(con,callback) {
    con.query(`select sum(qte*pu) as total from produit,commande where  commande.numProd=produit.numProduit`,callback);
 },
 chiffreAffByDate: function(con,date,callback){  
    con.query(`select client.numClient as client,nom,sum(qte*pu) as CA from client,produit,commande where client.numClient=commande.numClient and commande.numProd=produit.numProduit and YEAR(date)='${date}' group by client,nom`,callback);

 },
 totalChiffreAffByDate: function(con,date,callback){
    con.query(`select sum(qte*pu) as total from produit,commande where  commande.numProd=produit.numProduit and YEAR(date)='${date}'`,callback)
 }
}