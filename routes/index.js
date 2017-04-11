var connection = require('../connection');

connection.connect(); //connect to database

/*
 * GET Home Page
 */

exports.home = function(req, res) {

	connection.query( 'SELECT * FROM Notes WHERE Category_id = 1', function(err1, row1, field1) {
		if (err1) console.log(err1);
		res.render('index', { /*Object to sent to view*/ });		
	});
	
};