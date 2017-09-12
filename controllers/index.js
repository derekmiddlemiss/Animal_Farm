var express = require( 'express' );
var router = express.Router();
var path = require( 'path' );

router.use( '/api/animals', require( './animals' ) )

module.exports = router;