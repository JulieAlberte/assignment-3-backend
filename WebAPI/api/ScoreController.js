var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var Score = require('../api/models/score');

router.post('/add', function (req, res) {
    Score.create({
        username: req.body.username,
        score: req.body.score
    },
        function (err) {
            if (err) {
                return res.status(500).send("There was a problem registering the highscore");
            } else {
                Score.find({}, function (err, result) {
                    if (err) {
                        res.status(500).send("There was a problem getting the highscores");
                    } else {
                        res.status(200).send({ status: res.statusCode });
                    }
                });
            }
        });
});

module.exports = router;