// routes/githubRoutes.js
const express = require('express');
const router = express.Router();
const githubController = require('../controllers/githubController');

// Route to search users
router.get('/search/users', githubController.searchUsers);

// Route to get user details
router.get('/users/:username', githubController.getUserDetails);

// Route to get repository details
router.get('/repos/:username/:repoName', githubController.getRepoDetails);

module.exports = router;