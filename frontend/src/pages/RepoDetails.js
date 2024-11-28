// src/pages/RepoDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

/**
 * RepoDetails component displays detailed information about a specific repository,
 * including recent commits.
 *
 * @component
 */
function RepoDetails() {
  const { username, repoName } = useParams(); // Extract parameters from URL
  const [commits, setCommits] = useState([]); // List of recent commits
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(''); // Error message

  /**
   * Fetches the recent commits for the repository from the backend API.
   * Runs when the component mounts or when username or repoName changes.
   */
  useEffect(() => {
    const fetchRepoCommits = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/github/repos/${username}/${repoName}/commits`
        );
        setCommits(res.data);
        setError('');
      } catch (err) {
        console.error('Error fetching repository commits:', err.message);
        setError('An error occurred while fetching repository commits.');
      }
      setLoading(false);
    };
    fetchRepoCommits();
  }, [username, repoName]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container">
      {/* Repository Header */}
      <h2>
        Repository: {repoName} by {username}
      </h2>

      {/* Recent Commits */}
      <h3>Recent Commits</h3>
      <ul>
        {commits.map((commit) => (
          <li key={commit.sha}>
            <p>
              <strong>Message:</strong>{' '}
              <a
                href={commit.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {commit.commit.message}
              </a>
            </p>
            <p>
              <strong>Author:</strong> {commit.commit.author.name}
            </p>
            <p>
              <strong>Date:</strong>{' '}
              {new Date(commit.commit.author.date).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>

      <Link to={`/user/${username}`}>Back to User</Link>
    </div>
  );
}

export default RepoDetails;