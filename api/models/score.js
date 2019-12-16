var mongoose = require('mongoose');  

var ScoreScheme = new mongoose.Schema({  
  username: String,
  score: Number,
  rank: Number | undefined
});
mongoose.model('Score', ScoreScheme);

module.exports = mongoose.model('Score', ScoreScheme);