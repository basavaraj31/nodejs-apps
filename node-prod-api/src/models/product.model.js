'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
var Product = function(product){
    this.id     = product.id;
    this.name   = product.name;
    this.price  = product.price;
    this.sku    = product.sku;
};
Product.create = function (newProd, result) { 
    
    
    const query = {
        text: 'INSERT INTO products(name, price, sku) VALUES( $1, $2, $3)',
        values: [newProd.name,newProd.price,newProd.sku],
      }

    dbConn.query(query, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res);
            result(null, res.insertId);
        }
    });           
};
Product.findById = function (id, result) {
    dbConn.query("Select * from products where id = $1 ", [id], function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Product.findAll = function (result) {
    dbConn.query("Select * from products", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('product : ', res);  
            result(null, res);
        }
    });   
};
Product.update = function(id, product, result){
  dbConn.query("UPDATE products SET name=$1,price=$2,sku=$3 WHERE id =$4", [product.name,product.price,product.sku, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Product.delete = function(id, result){
     dbConn.query("DELETE FROM products WHERE id =$1", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Product;