var mongoose = require('mongoose');
var localDBURI = 'mongodb://localhost/MandatoryAssignment3_localDB';
var dbUri = process.env.MONGODB_URI;
mongoose.connect(dbUri || localDBURI, { useNewUrlParser: true, useUnifiedTopology: true });
