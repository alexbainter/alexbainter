const express = require('express');
const router = express.Router();
const { Rating, Skill } = require('./models');

router.get('/ratings', (req, res, next) => {
    Rating.find((err, ratings) => {
        if (err) {
            next(err);
        }
        res.json(ratings);
    });
});

router.get('/skills', (req, res, next) => {
    Skill.find().populate('rating').exec((err, skills) => {
        if (err) {
            next(err);
        }
        res.json(skills);
    });
});

module.exports = router;
