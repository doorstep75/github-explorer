// tests/githubController.test.js 
const request = require('supertest');
const express = require('express');
const githubRoutes = require('../routes/githubRoutes');

const app = express();
app.use('/api/github', githubRoutes);

describe('GitHub API Routes', () => {
  it('should search users', async () => {
    const res = await request(app).get('/api/github/search/users?q=octocat');
    expect(res.statusCode).toEqual(200);
    expect(res.body.items).toBeDefined();
  });

  it('should fetch repository commits', async () => {
    const res = await request(app).get('/api/github/repos/octocat/Hello-World/commits');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array); // Expecting an array of commits
  });

});