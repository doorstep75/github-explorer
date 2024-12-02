// routes/githubRoutes.js (updated with proper comments also)
const express = require('express');
const router = express.Router();
const githubController = require('../controllers/githubController');

/**
 * Route to search users
 * Example: GET /api/github/search/users?q=octocat
 */
router.get('/search/users', githubController.searchUsers);

/**
 * Route to get user details
 * Example: GET /api/github/users/octocat
 */
router.get('/users/:username', githubController.getUserDetails);

/**
 * Route to get repository details
 * Example: GET /api/github/repos/octocat/Hello-World
 */
router.get('/repos/:username/:repo', githubController.getRepoDetails);

/**
 * Route to get repository commits
 */
router.get('/repos/:username/:repo/commits', githubController.getRepoCommits);

module.exports = router;