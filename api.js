const express = require('express');
const router = express.Router();
const { Rating, Skill, Snippet } = require('./models');

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

router.get('/snippet', (req, res, next) => {
    Snippet.count().exec((err, count) => {
        if (err) {
            next(err);
        }
        const randomIndex = Math.floor(Math.random() * count);
        Snippet.findOne().skip(randomIndex).exec((err, snippet) => {
            if (err) {
                next(err);
            }
            res.json(snippet)
        });
    });
})

module.exports = router;
