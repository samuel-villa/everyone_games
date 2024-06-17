# EveryoneGames - Video Game Discovery Platform

=> [https://everyone-games.netlify.app/](https://everyone-games.netlify.app/)

This project is a video game discovery platform built using React. The platform allows users to browse, search, and explore video games across various platforms. It leverages the RAWG Video Games Database API to fetch and display game data.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Code Quality](#code-quality)
- [Future Enhancements](#future-enhancements)
- [Credits](#credits)
- [License](#license)

## Project Overview

The goal of this project was to consolidate knowledge in React and create a scalable video game website. We've been provided some reference images and had to deliver a front-end solution that meets the required needs. This application was built from scratch with the potential for future scalability.

## Features

- **Home Page**
  - Displays new and trending video games.
  - Infinite scroll for game listings.
  - Filter games by categories: New releases, Next week releases, Pupolar games.
  - Search functionality to find games by name.
  - Filter games by date added, name, release date, and platforms.
  - Game cards with hover details (average score, platforms, title, release date, genres).

- **Game Page**
  - Detailed game information including trailers and screenshots.
  - Search bar accessible on the game page to return to the homepage.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/EveryoneGames.git
   cd EveryoneGames
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## Usage

1. Navigate to the homepage to view new and trending video games.
2. Use the search bar to find specific games by name.
3. Filter games by various criteria using the filter options.
4. Click on a game card to view detailed information about the game on the game page.

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For navigation and routing.
- **Uuid**: For generating unique identifiers.
- **Prettier**: For code formatting.
- **ESLint**: For code linting and enforcing best practices.
- **RAWG Video Games Database API**: For fetching game data.

## Code Quality

To ensure high code quality, we have used Prettier for code formatting and ESLint for enforcing good coding practices. ESLint is not disabled at any point in the project.

## Future Enhancements

- Add user authentication for personalized features.
- Implement a game comparison feature.
- Enhance the user interface with additional animations and effects.
- Integrate social sharing options for games.
- Add more filtering and sorting options.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
