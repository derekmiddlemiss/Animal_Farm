var express = require( 'express' );
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

// DELETE

module.exports = animalsRouter;