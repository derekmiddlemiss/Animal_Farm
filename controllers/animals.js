var express = require( 'express' );
var Animal = require( '../models/animal.js' );
var animalsRouter = express.Router();
var MongoClient = require( 'mongodb' ).MongoClient;
var db;

MongoClient.connect( 'mongodb://localhost:27017/farm', function( err, database ){
  if ( err ) return;
  db = database;
})

// animals INDEX
animalsRouter.get( '/', function( req, res ){
  //Get animals from DB
  db.collection( 'animals' ).find().toArray( function( err, results ){
    if ( err ) console.log( "Oops " + err.toString() );
    //Send back to client
    res.json( results );
  });
  //Send back to client
});

// SHOW

// EDIT

// UPDATE

// CREATE
animalsRouter.post( '/', function( req, res ) {
  console.log( "post working")
  //Get animals data from body of req
  var animalData = req.body;
  //New up an animal
  var animal = new Animal( animalData );
  //Save to db
  db.collection( 'animals' ).insert( animal );
  res.redirect( '/api/animals' );


})

// DELETE

module.exports = animalsRouter;