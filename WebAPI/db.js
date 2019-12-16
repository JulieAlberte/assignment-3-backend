var mongoose = require('mongoose');
var localDBURI = 'mongodb://localhost/MandatoryAssignment3_localDB';
mongoose.connect(localDBURI, { useNewUrlParser: true, useUnifiedTopology: true });
