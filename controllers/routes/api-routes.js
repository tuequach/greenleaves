/* eslint-disable indent */

var db = require("../../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the products
  app.get("/api/products", function(req, res) {
      db.Product.findAll({}).then(function(dbProduct){
        res.json(dbProduct);
      });
  });

  // Get route for returning posts of a specific category
  // app.post("/api/admin/add", function(req, res) {
  //     db.Product.create({
  //        name: req.body.name,
  //        quantity: req.body.quantity,
  //        unit: req.body.unit
  //     }).then(function(dbProduct){
  //       res.json(dbProduct);
  //     });
  // });


  // Get route for retrieving a single product by id
  app.get("/api/products/:id", function(req, res) {
      db.Product.findOne({
        id: req.params.id
      }).then(function(dbProduct){
        res.json(dbProduct);
      });
   
  });

  // Get route for retrieving  all product by name
  app.get("/api/products/:name", function(req, res) {
    db.Product.findAll({
      name: req.params.name
    }).then(function(dbProduct){
      res.json(dbProduct);
    });
});

};