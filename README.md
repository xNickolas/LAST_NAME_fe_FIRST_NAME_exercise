# Tempo Frontend challenge
## Project Documentation

## Table of Contents
- API (Api.ts)
- Card Component
- Header Component
- List Component
- Search Field Component
- Spinner Component
- Global Components 
- Team Overview Page 
- Teams Page 
- User Overview Page 
- Types
- App 
- Index 
- API 

This module defines functions to fetch data from an API. It includes functions to get teams, team overviews, and user data.

getTeams(): Fetches a list of teams and returns them as an array of Teams objects.

getTeamOverview(teamId): Fetches the details of a specific team based on the teamId and returns a TeamOverview object.

getUserData(userId): Fetches the data of a user based on the userId and returns a UserData object.


### Card Component 
The Card component is used to display information in a card-like format. It is a common component used to display user and team details. It accepts a set of columns with key and value pairs and can include icons and text.

### Header Component
The Header component is used to render a navigation header at the top of various pages. It can display a back button, a title, and other elements.

### List Component
The List component is used to display a list of items. It can include navigation and an optional loading spinner. It is often used to display teams and team members.

### Search Field Component
The SearchField component is a reusable UI component that provides a search bar with an input field and an icon. It is designed to allow users to search for specific items, such as teams or team members.

### Spinner Component
The Spinner component displays a loading spinner that is often used when data is being fetched or loaded asynchronously.

### Global Components
This module defines global styling components that can be used throughout the application to ensure a consistent look and feel.

### Team Overview Page
The TeamOverview page displays details about a specific team. It includes a header with the team name, information about the team lead, and a list of team members.

### Teams Page
The Teams page displays a list of teams and allows users to search for specific teams by name using the search bar.

### User Overview Page
The UserOverview page displays details about a specific user, including their name, display name, and location.

### Types
The Types module defines the data structures and types used throughout the application. It includes interfaces for Teams, TeamOverview, UserData, ListItemColumn, and ListItem.

### App
The App component sets up the application's routing using the react-router-dom library. It defines the routes for the application, including the Teams, TeamOverview, and UserOverview pages.

### Index
The Index component is the entry point of the application, rendering the App component and applying global styles.

This documentation provides an overview of the project's components and structure, making it easier to understand the organization and functionality of the application. You can explore each component to gain a deeper understanding of how they work and how they contribute to the overall application.

## Project Tests
This project includes a series of tests to ensure the quality and reliability of the codebase. The tests cover various aspects of the application, including functionality, code integrity, and performance

### Unit Tests:
Components: The project have unit tests for individual React components to ensure that they render correctly and handle user interactions as expected. This includes testing components such as Card, Header, List, SearchField and Spinner.

API Calls: Testing API functions using mocks to simulate responses and verify that the application correctly processes data from external sources.

### Integration Tests:
Page Components: Performed integration tests on page-level components, such as TeamOverview, Teams and UserOverviw, to ensure that data is correctly passed between components and that the pages render as expected.

Routing: Was tested the application routing to verify that navigating between different pages works as intended.

### End-to-End (E2E) Tests:
Used E2E testing frameworks to simulate user interactions within the application. This includes tests for searching, navigating between pages, and other user flows to verify that the application functions correctly from a user's perspective.

### Performance Tests:
Conducted performance testing to evaluate the application's response times, resource consumption, and other performance metrics. This ensures that the application performs well under various conditions.

## Usage

To use this project, follow these steps:

1. Clone the repository to your local machine.
2. Make sure you have Node.js and npm (Node Package Manager) installed.
3. Run npm install in the project directory to install the required dependencies.
5. Start the development server by running npm start. This will launch the application locally.

## Additional Notes

- This project uses React and TypeScript, so ensure you are familiar with these technologies.
- The project follows a component-based architecture for better organization and maintainability.
