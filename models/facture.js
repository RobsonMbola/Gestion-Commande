const con = require ('../config/Db');
 module.exports = {
     facture: function(con,userId,callback){   
    con.query(`select client.numClient,nom,design,pu,qte,qte*pu as montant from client,produit,commande where client.numClient=commande.numClient and commande.numProd=produit.numProduit and client.numClient='${userId}'`,callback)
 },
    totalFacture: function(con,userId,callback){
    con.query(`select sum(qte*pu) as total from produit,commande where  commande.numProd=produit.numProduit and commande.numClient='${userId}'`,callback)
 }
}