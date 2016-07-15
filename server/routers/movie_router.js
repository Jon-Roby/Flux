var express = require('express');
var movieRouter = express.Router();
const passport = require('passport');

const Authentication = require('../controllers/authentication');
const Movies = require('../controllers/movies');
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

var User = require('../models/movie');

movieRouter.post('/', Movies.create);

movieRouter.get('/:id', Movies.getOne);


module.exports = movieRouter;
