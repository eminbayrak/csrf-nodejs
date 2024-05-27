Certainly! Below is a detailed `README.md` file for your Node.js application. This file includes instructions for setting up and running the project, as well as an overview of the project structure and key dependencies.

---

# Node.js Express Application

This is a Node.js application built with Express, using TypeScript for type safety, and Docker for containerization. The application includes CSRF protection and session management.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Logging](#logging)
- [Docker](#docker)
- [Endpoints](#endpoints)

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 22 or later)
- [Docker](https://www.docker.com/)
- [pnpm](https://pnpm.io/)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies using `pnpm`:

   ```sh
   pnpm install
   ```

3. Install TypeScript and Nodemon globally:

   ```sh
   pnpm add -g typescript nodemon
   ```

## Running the Application

### Locally

1. Compile TypeScript to JavaScript:

   ```sh
   npx tsc
   ```

2. Start the application:

   ```sh
   pnpm start:local
   ```

   The server will start on the port specified in your `.env` file or default to `5000`.

### Using Docker

1. Build the Docker image:

   ```sh
   docker build -t your-app-name .
   ```

2. Run the Docker container:

   ```sh
   docker run -p 5000:5000 your-app-name
   ```

   The server will start and be accessible at `http://localhost:5000`.

## Project Structure

- `src/`
  - `index.ts`: Main entry point of the application.
  - `logger.ts`: Logger configuration using `winston` or another logging library.
- `package.json`: Project metadata and scripts.
- `pnpm-lock.yaml`: Lock file for dependencies.
- `Dockerfile`: Instructions to build the Docker image.
- `.env`: Environment variable configuration file.

## Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```env
PORT=5000
```

Ensure to adjust these variables as per your requirements.

## Logging

The application uses a custom logger to log specific request details such as IP address, method, and URL. Modify the `logger.ts` file to adjust logging preferences.

## Docker

The Dockerfile is set up to:

1. Install `pnpm` globally.
2. Copy the necessary files to the container.
3. Install dependencies using `pnpm`.
4. Compile TypeScript to JavaScript.
5. Expose port `5000`.
6. Define the default command to run the application.

### Custom DNS Configuration

A custom DNS configuration file (`custom-resolv.conf`) is copied into the container to ensure proper DNS resolution.

## Endpoints

### GET /

- **Description**: Root endpoint that returns a message indicating the server is running along with the CSRF token.
- **Response**: `200 OK` with a message.

Example response:

```text
This endpoint is working CSRF Token: <CSRF Token>
```

## Security Features

- **CSRF Protection**: Implemented using `csurf` middleware.
- **Session Management**: Handled by `express-session`, with a secret generated using `crypto`.

---

Ensure to customize the placeholders like `your-username`, `your-repo-name`, and `your-app-name` with actual values relevant to your project.

This `README.md` provides a comprehensive guide for developers to set up, run, and understand the structure and functionalities of the application.