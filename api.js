const express = require('express');
const router = express.Router();
const { Rating, Skill, Snippet, Position, Project } = require('./models');

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

router.get('/positions', (req, res, next) => {
    Position.find().populate('skills').exec(handleQueryResult.bind(null, res, next));
});

router.get('/projects', (req, res, next) => {
    Project.find().populate('skills').exec(handleQueryResult.bind(null, res, next));
});

router.get('/snippet/:currentSnippetId?', (req, res, next) => {
    Snippet.count().exec((err, count) => {
        if (err) {
            next(err);
        }
        if (count === 1) {
            Snippet.findOne().exec(handleQueryResult.bind(null, res, next));
        } else {
            var query = Snippet.findOne();
            const { currentSnippetId } = req.params;
            if (currentSnippetId) {
                count--;
                query = query.where('_id').ne(currentSnippetId)
            }
            const randomIndex = Math.floor(Math.random() * count);
            query.skip(randomIndex).exec(handleQueryResult.bind(null, res, next));
        }
    });
})

module.exports = router;
