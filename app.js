// This is the SBA (Practical exam) for the Web course.
// Author: Vladimir Belykh
// Date: 3 May 2025
// Last Revision by Ganeshan: 2 May 2025
// Modified by: 
// Date: 
// Version 1.0
var express = require('express');
var app = express();

//ejs template
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

// home page
app.get('/', function (req, res) {
	res.render("home");
})

// waterfalls page
app.get('/waterfalls', function (req, res) {
	res.render('waterfalls', { title: 'NZ Waterfalls' });
});

//lakes page
app.get('/lakes', function (req, res) {
	res.render('lakes', { title: 'NZ Lakes' });
});

// our port
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');