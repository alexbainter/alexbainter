const express = require('express');
const router = express.Router();
const { Rating, Skill, Snippet } = require('./models');

function handleQueryResult(res, next, err, result) {
    if (err) {
        next(err);
    }
    res.json(result);
}

router.get('/ratings', (req, res, next) => {
    Rating.find(handleQueryResult.bind(null, res, next));
});

router.get('/skills', (req, res, next) => {
    Skill.find().populate('rating').exec(handleQueryResult.bind(null, res, next));
});

router.post('/snippet', (req, res, next) => {
    Snippet.count().exec((err, count) => {
        if (err) {
            next(err);
        }
        if (count === 1) {
            Snippet.findOne().exec(handleQueryResult.bind(null, res, next));
        } else {
            const randomIndex = Math.floor(Math.random() * (count - 1));
            Snippet.findOne().where('_id').ne(req.body.currentSnippetId).skip(randomIndex).exec(handleQueryResult.bind(null, res, next));
        }
    });
})

module.exports = router;
