/* eslint-disable indent */
const router = require("express").Router();
var db = require("../../models");

// Routes
// =============================================================
  // GET route for getting all of the products
  router.get("/products", function(req, res) {
      db.Product.findAll({}).then(function(dbProduct){
        res.json(dbProduct);
      });
  });

  // Get route for returning posts of a specific category
  router.post("/products/add", function(req, res) {
    console.log("Post was hit with req", req.body);
      db.Product.create({
         name: req.body.name,
         quantity: req.body.quantity,
         unit: req.body.unit
      }).then(function(dbProduct){
        res.json(dbProduct);
      });
  });


  // Get route for retrieving a single product by id
  router.get("/products/:id", function(req, res) {
      db.Product.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbProduct){
        res.json(dbProduct);
      });
   
  });

  // Get route for retrieving  all product by name
  router.get("/products/:name", function(req, res) {
    db.Product.findAll({
      where: {
        name: req.params.name
      }
    }).then(function(dbProduct){
      res.json(dbProduct);
    });
});


module.exports = router;