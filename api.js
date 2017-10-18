const express = require('express');
const router = express.Router();
const { Rating, Skill, Position, Project } = require('./models');

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


module.exports = router;
