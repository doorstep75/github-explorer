// src/pages/Home.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

/**
 * Home component allows users to search for GitHub users.
 * It displays a search form and lists matching users.
 *
 * @component
 */
function Home() {
  // State variables
  const [query, setQuery] = useState(''); // Search query entered by the user
  const [users, setUsers] = useState([]); // List of users returned from the API
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error message
  const [lastQuery, setLastQuery] = useState(''); // Tracks the last searched query
  const [hasSearched, setHasSearched] = useState(false); // Tracks if a search has been attempted

  /**
   * Handles the search form submission.
   * Fetches users from the backend API based on the search query.
   *
   * @param {Event} e - The form submission event.
   */
  const searchUsers = async (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      return; // Prevent empty searches
    }
    setLoading(true);
    setUsers([]); // Clear previous results
    setError('');
    setHasSearched(true); // Mark that a search has been attempted
    try {
      const res = await axios.get('http://localhost:5000/api/github/search/users', {
        params: { q: query },
      });
      setUsers(res.data.items);
      setError('');
      setLastQuery(query); // Update lastQuery after successful search
    } catch (err) {
      console.error('Error fetching users:', err.message);
      setError('An error occurred while fetching users.');
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>GitHub User Search</h1>
      <p>
        Below, simply enter the GitHub username to have a list of possible users returned. Then click
        on the link to the user's profile that you wish to view.
      </p>

      {/* Search Form */}
      <form onSubmit={searchUsers}>
        <input
          type="text"
          placeholder="Enter username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Loading Indicator */}
      {loading && <p>Loading...</p>}

      {/* Error Message */}
      {error && <p>{error}</p>}

      {/* No Users Found Message */}
      {!loading && hasSearched && users.length === 0 && query === lastQuery && (
        <p>Sorry, no users found. Please try a different search.</p>
      )}

      {/* Users List */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;