<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# MiniRedditAppWithReact-Redux
=======
# MiniReddit

## Description
MiniReddit is a web application that allows users to explore Reddit posts by categories, filter posts based on various criteria, view details about specific posts, and interact with them using likes, dislikes, and comments. This project demonstrates a responsive, accessible, and feature-rich React application with filtering and pagination functionalities.

## Wireframes
Below is an outline of the project's structure:

### Home Page

Displays posts with pagination.
Filtering options for newest, oldest, most popular, least popular, favorites, and non-favorites.

### Category Page

Lists posts filtered by specific categories (e.g., Technology, Gaming).

### Post Details Page

Displays detailed information about a post, including comments.

### About Page

Contains information about the app and its purpose. (Currently, the About page must be accessed manually by adding /about to the URL in the browser.)
## Technologies Used
### Frontend:

React: Component-based architecture for building user interfaces.
Redux Toolkit: State management for posts, comments, and interactions.
React Router: For routing between different pages.
Bootstrap: For styling and responsive design.
API:
    Reddit API: For fetching posts and comments.
Testing:
    Visual testing through user interaction.
    Debugging using browser developer tools (e.g., Chrome DevTools).
    Features
Filtering and Sorting:
    Filter posts by:
        Newest: Shows the most recent posts.
        Oldest: Displays the oldest posts.
        Most Popular: Posts with the highest number of views.
        Least Popular: Posts with the lowest number of views.
        Favorites: Posts with the highest likes.
        Non-favorites: Posts with the least likes.
        Search posts by keywords.
        Pagination:
            Handles large datasets by dividing posts into manageable pages.
            Interactivity:

Like and dislike posts with real-time UI updates.
Toggle comment visibility for each post.
Responsive Design:

    Adapts to different screen sizes for better accessibility.

Dynamic Categories:

    Explore posts by popular categories like Technology, Gaming, and more.

Post Details Page:

    Detailed view of individual posts with author, created date, and comments.

Visual Testing Workflow:

    Use browser-based testing by interacting with features like filtering, pagination, and comments visibility.
    Ensure cross-browser compatibility by testing in Chrome, Firefox, and Edge.

## Known Issues
### About Page Access:

The About page is not linked directly in the navigation. To access it, manually add /about to the browser URL.
Testing:

Jest and unit tests were omitted in favor of visual testing. Ensure to conduct extensive manual testing for all features.

## Future work:

### Improved Testing:

Add visual and integration tests to complement existing functionality.

## Testing
### Visual Testing
No Jest testing is implemented in this project, but visual testing ensures the application works as intended:

Verify UI components in different browsers.
Test responsiveness on mobile, tablet, and desktop devices.

## Deployment
### Build the app for production:

copy this code and add it in the command line: "npm run build"
Deploy the build folder to a web server or hosting service.

## Troubleshooting
If you encounter issues, try the following:
Ensure all dependencies are installed with "npm install".
Clear the cache and rebuild: "npm cache clean --force npm run build"
For further issues, consult the React documentation.

## License
This project is open-source and available under the MIT License.

## Acknowledgements
Special thanks to:

Reddit API for providing free and accessible data.
React Community for tools and resources.
Feel free to update specific sections (like deployment steps or wireframes) as needed!
>>>>>>> fcd7c4a (added major stuff)
