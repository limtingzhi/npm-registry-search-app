# NPM Registry Search Application

A web application that allows users to search for NPM packages, view paginated search results, and access detailed package information.

## System Design

The application is built as a Single-Page Application (SPA) using React and TypeScript. It interacts with the [NPM Registry API](https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md) to fetch package data.

### Tech Choices & Assumptions

* **React with TypeScript:** Used for its component-based architecture and strong typing.
* **MUI (Material UI):** Used for a reliable and user-friendly user interface.
* **Fetch API:** Used for making HTTP requests to the NPM Registry API.
* **React Router:** Used for client-side navigation.
* **Stable NPM API:** Assumed to remain stable for reliable data fetching.

### Architecture

* **Component-Based:** Implements a modular and maintainable structure.
* **Custom Hooks:** Encapsulates logic for reusability, data fetching, and state management.
* **API Service Layer:** Centralises API interactions for easier maintenance.
* **Type Safety:** TypeScript is used to runtime errors.

### Testing

* **Unit & Integration Tests:** API mocking prevents external dependencies from affecting test results. Components and hooks are thoroughly tested using Jest and React Testing Library.
* **UI Stability:** Snapshot testing ensures UI consistency.

## UX Choices

* **Search Input:** A search bar enables users to enter keywords to find NPM packages.
* **Paginated Results:** A responsive table layout displays search results with pagination for enhanced usability. Each result includes key details such as package name, author, and last updated date.
* **Detailed Package View:** A "View Details" button opens a dedicated details page with comprehensive information, including the description, license, latest version, and README. The "View Details" button provides a clear visual cue, ensuring users understand how to access package details.
* **Loading States & Error Handling:** Loading indicators and error messages improve the overall user experience.

## Setup

### Requirements

* **Node.js**: v23.x or later
* **npm**: v10.x or later

### Install Dependencies

```bash
npm install
```

### Development

#### Run ESLint

To check for linting issues:

```bash
npm run lint
```

#### Run Tests

To execute tests:

```bash
npm run test
```

#### Run Application

To start the development server and access the application at [http://localhost:8090](http://localhost:8090):

```bash
npm run dev
```
