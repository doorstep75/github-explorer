# GitHub Explorer

Welcome to **GitHub Explorer**, a full-stack web application that allows you to search for GitHub users, view their profiles, and explore their repositories and recent commits. This app is built with a Node.js and Express backend and a React frontend.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- **Search GitHub Users**: Find users by their GitHub username.
- **View User Profiles**: Access detailed information about GitHub users.
- **Explore Repositories**: Browse through a user's repositories.
- **View Recent Commits**: See the latest commits for a specific repository.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 12 or later)
- **npm** (Node Package Manager, comes with Node.js)
- **Git**

## Installation

### Backend Setup

1. **Clone the Repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/doorstep75/github-explorer.git
   ```

2.	**Navigate to the Backend Directory**
  ```bash
  cd github-explorer/backend
  ```

3.	**Install Backend Dependencies**
  ```bash
  npm install
  ```

4.	**Start the Backend Server**
  ```bash
  node index.js
  ```

  The backend server should now be running on http://localhost:5000.

### Frontend Setup

  Open a new terminal window or tab, then:

1.	**Navigate to the Frontend Directory**
  ```bash
  cd github-explorer/frontend
  ```

2.	**Install Frontend Dependencies**
  ```bash
  npm install
  ```

3.	**Start the Frontend Server**
  ```bash
  npm start
  ```

  The frontend application should open in your default web browser at http://localhost:3000.

### Running the Application

  Ensure both the backend and frontend servers are running:

- Backend: http://localhost:5000
- Frontend: http://localhost:3000

### Usage

1.  **Access the Application**

  Open your web browser and go to http://localhost:3000.

2.  **Search for GitHub Users**

- Enter a GitHub username in the search field.
- Click the **Search** button.
- A list of users matching the search query will be displayed.

3.  **View User Details**

- Click on a username from the search results.
- You will be redirected to a page showing the user’s profile information and their repositories.

4.  **Explore Repositories**

- On the user’s detail page, you will see a list of their repositories.
- Click on a repository name to view more details, including the latest commits.

5.  **View Recent Commits**

- The repository detail page displays the last five commits.
- Click on a commit message to view more details on GitHub.

### Project Structure

github-explorer/
├── backend/
│   ├── controllers/
│   │   └── githubController.js
│   ├── routes/
│   │   └── githubRoutes.js
│   ├── index.js
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── UserDetails.js
│   │   │   └── RepoDetails.js
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── ...
├── .gitignore
└── README.md

- backend/: Contains the Express server code.
- frontend/: Contains the React application code.

### License

  This project is open-source and available under the [MIT License](LICENSE).
