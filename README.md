# React News App

The React News App is a web application built with React that allows users to browse and read news articles from various sources using the News API.

## Features

- Browse news articles by category (e.g., business, technology, sports, etc.).
- View detailed information about each news article, including the title, description, author, and publication date.
- Click on a news article to open the full article in a new tab.
- Pagination support to navigate through multiple pages of articles.
- Responsive design for optimal viewing experience on different devices.

## Installation
To run the React News App locally on your machine, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/prakhyat274/newshub.git
   ```
2. Navigate to the project directory:

    ```bash
    cd newshub
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```
4. Obtain an API key from the News API website (https://newsapi.org) by signing up for an account.

5. Create a `.env.local` file in the root directory of the project.

6. Open the `.env.local` file and add the following line:
    ```bash
    REACT_APP_NEWS_API_KEY="your-api-key"
    ```
Replace your-api-key with the API key obtained from the News API.

7. Start the development server:
    ```bash
    npm start
    ```

This will launch the React News App on your local machine. You can access it by opening your web browser and navigating to http://localhost:3000.

## Configuration

The React News App uses environment variables to configure the application. The API key for the News API is stored in the `.env.local` file. Make sure to replace `your-api-key` with your actual API key.

### Dependencies

The React News App relies on the following dependencies:

- React: JavaScript library for building user interfaces.
- Bootstrap: CSS framework for responsive and mobile-first web development.
- react-bootstrap: React components for Bootstrap.
- react-router-dom: React library for handling routing in a single-page application.

These dependencies are automatically installed when running `npm install`.

## API Usage

The React News App uses the News API to fetch news articles. It supports the following API endpoints:

- Top headlines: Fetches the top headlines from various sources.

  Endpoint: `https://newsapi.org/v2/top-headlines`

  Query Parameters:
  - `country`: The 2-letter ISO 3166-1 code of the country for which you want to fetch headlines.
  - `category`: The category of news articles to retrieve (e.g., business, technology, sports, etc.).
  - `apiKey`: Your News API key.

  Example Request:

    ```shell
    GET /v2/top-headlines?country=in&category=technology&apiKey=your-api-key
  
For more details on the News API and its endpoints, refer to the [News API documentation](https://newsapi.org/docs).

## Contributing

Contributions to the React News App are welcome! If you have any bug fixes, improvements, or new features to propose, please submit a pull request. Ensure that your code follows the established coding conventions and passes all tests.

## Acknowledgments

The React News App is made possible thanks to the following:

- The News API (https://newsapi.org) for providing access to news articles.
- Bootstrap (https://getbootstrap.com) for the CSS framework.
- react-bootstrap (https://react-bootstrap.github.io) for the React components.
- react-router-dom (https://reactrouter.com) for routing in the React app.

Feel free to customize the README documentation based on your specific project requirements, including any additional details or information you want to provide.
