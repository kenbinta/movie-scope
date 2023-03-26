
# Movie Scope

Movie-Search is a Github project with a user-friendly web application that uses the OMDb API to search for and display movie results. It includes pagination with dots, a movie details page, and both light and dark modes. It's an essential tool for movie enthusiasts who want to easily find and explore movie information.


## Running Tests

To run tests, run the following command

```bash
  npm test
```

To run tests with coverage, run the following command

```bash
  npm run coverage
```
## Installation
Before installing and running the Next.js app from Github, it's important to make sure you have Node.js installed on your local machine. You can check whether Node.js is installed by running the following command in your terminal or command prompt:


Download this repository to your local machine using the command or clone the Github repository to your local machine using the command

```bash
  git clone https://github.com/kenbinta/movie-scope.git
```


Install the necessary dependencies by running the command

```bash
  npm install
```
Create a .env file in the root directory of the project and add the following environment variables:

```bash
NEXT_PUBLIC_OMDB_API_KEY=<your_key>
NEXT_PUBLIC_baseURL=http://www.omdbapi.com/
```

Run the following command to build the production version of the app:
```bash
  npm run build
```

Start the development server using the command:
```bash
  npm run start
```