// backend/controllers/githubController.js

const axios = require('axios');
const BASE_URL = 'https://api.github.com';

/**
 * Searches for GitHub users based on a query parameter.
 *
 * @param {Object} req - Express request object containing the query parameter.
 * @param {Object} res - Express response object for sending the response.
 */
exports.searchUsers = async (req, res) => {
  const { q } = req.query; // Extract the search query
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q },
    });
    res.json(response.data); // Send the search results back to the client
  } catch (err) {
    console.error('Error searching users:', err.message);
    res.status(500).json({ error: 'Error searching users' });
  }
};

/**
 * Retrieves detailed information about a specific GitHub user,
 * including their profile and repositories.
 *
 * @param {Object} req - Express request object containing the username parameter.
 * @param {Object} res - Express response object for sending the response.
 */
exports.getUserDetails = async (req, res) => {
  const { username } = req.params; // Extract the username from the URL parameters
  try {
    const [userData, reposData] = await Promise.all([
      axios.get(`${BASE_URL}/users/${username}`),
      axios.get(`${BASE_URL}/users/${username}/repos`),
    ]);
    res.json({ user: userData.data, repos: reposData.data }); // Send user data and repos to client
  } catch (err) {
    console.error('Error fetching user details:', err.message);
    res.status(500).json({ error: 'Error fetching user details' });
  }
};

/**
 * Retrieves the recent commits for a specific repository of a user.
 *
 * @param {Object} req - Express request object containing username and repo parameters.
 * @param {Object} res - Express response object for sending the response.
 */
exports.getRepoCommits = async (req, res) => {
  const { username, repo } = req.params; // Extract username and repo from URL parameters
  try {
    const response = await axios.get(`${BASE_URL}/repos/${username}/${repo}/commits`, {
      params: { per_page: 5 },
    });
    res.json(response.data); // Send the commits data back to the client
  } catch (err) {
    console.error('Error fetching repository commits:', err.message);
    res.status(500).json({ error: 'Error fetching repository commits' });
  }
};