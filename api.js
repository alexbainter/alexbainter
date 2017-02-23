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

router.post('/snippet', (req, res, next) => {
    Snippet.count().exec((err, count) => {
        if (err) {
            next(err);
        }
        if (count === 1) {
            return Snippet.findOne().exec((err, snippet) => {
                if (err) {
                    next(err);
                }
                res.json(snippet);
            });
        } else {
            const randomIndex = Math.floor(Math.random() * (count - 1));
            Snippet.findOne().where('_id').ne(req.body.currentSnippetId).skip(randomIndex).exec((err, snippet) => {
                if (err) {
                    next(err);
                }
                res.json(snippet)
            });
        }
    });
})

module.exports = router;
