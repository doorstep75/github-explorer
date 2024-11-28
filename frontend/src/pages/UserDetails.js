// src/pages/UserDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

/**
 * UserDetails component displays detailed information about a GitHub user,
 * including their profile and a list of their repositories.
 *
 * @component
 */
function UserDetails() {
  const { username } = useParams(); // Extract username from URL parameters
  const [data, setData] = useState({ user: {}, repos: [] }); // User data and repositories
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(''); // Error message

  /**
   * Fetches user details and repositories from the backend API.
   * Runs when the component mounts or when the username changes.
   */
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/github/users/${username}`);
        setData(res.data);
        setError('');
      } catch (err) {
        console.error('Error fetching user details:', err.message);
        setError('An error occurred while fetching user details.');
      }
      setLoading(false);
    };
    fetchUserDetails();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const { user, repos } = data;

  return (
    <div className="container">
      {/* User Profile */}
      <img src={user.avatar_url} alt={user.login} width="150" />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          View Profile on GitHub
        </a>
      </p>

      {/* Repositories List */}
      <h3>Repositories</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repo/${username}/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>

      <Link to="/">Back to Search</Link>
    </div>
  );
}

export default UserDetails;