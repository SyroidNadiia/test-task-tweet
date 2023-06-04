TEST-TASK-TWEET

The Cards User Project is a fully functional web application that implements
user cards based on a provided design. It allows users to interact with the
cards by clicking the "Follow" button, which updates the button text to
"Following" and changes its color. Additionally, the follower count increases by
one with each button click.

One of the key features of the project is the preservation of user interactions
even after page refresh. This means that if a user clicks the "Follow" button
and then refreshes the page, the button will remain in the "Following" state
with the corresponding color, and the follower count will not reset to the
initial value.

The backend for the project was developed using the UI service mockapi.io. A
"users" resource was created with properties such as id, user, tweets,
followers, and avatar. The avatars were represented by separate URLs in the
"avatar" property.

To enhance user experience, pagination was implemented, allowing users to view
three tweets per page, with additional tweets loading when the "Load More"
button is clicked.

The project also includes routing functionality using React Router. The
following routes were set up:

"/" - Home component, serving as the landing page. "/tweets" - Tweets component
for displaying tweets. For additional functionality, a "Back" button was added
on the tweets page to allow users to navigate back to the home page.

Bonus Task: As an extra feature, filtering was implemented using a dropdown menu
with three options: "show all," "follow," and "followings." This enables users
to filter tweets based on their follow status.

Installation To install and run the project locally, follow these steps:

Clone the repository: git clone <repository-url> Navigate to the project
directory: cd <project-directory> Install dependencies: npm install Start the
development server: npm start

Usage Once the project is set up locally, follow these steps to use the
application:

Access the application through the provided URL or local development server.
Navigate through the different pages using the navigation links. Interact with
the user cards by clicking the "Follow" button and observe the changes in button
text, color, and follower count. Refresh the page and verify that the user
interaction state is preserved.

Technologies Used The Cards User Project is built using the following
technologies:

React: A JavaScript library for building user interfaces. React Router: A
library for handling routing in React applications. CSS/SCSS: Used for styling
the components. Emotion: A library for styling React components with CSS-in-JS.
Material-UI: A popular UI component library for React applications. Redux
Toolkit: A library that simplifies the management of state in React
applications. Axios: A library for making HTTP requests from the browser. React
Redux: A library for integrating Redux with React applications. Styled
Components: A library for styling React components with CSS-in-JS. Redux
Persist: A library for persisting Redux state in the browser's storage. These
technologies were utilized to develop and enhance the functionality and user
experience of the Cards User Project.

Contributing Contributions to the Cards User Project are welcome and
appreciated. If you would like to contribute, please follow these steps:

Fork the repository. Create a new branch: git checkout -b <branch-name> Make
your changes and commit them: git commit -m '<commit-message>' Push to the
original branch: git push origin <branch-name> Create a pull request on GitHub.
Please ensure that your code follows the project's coding conventions and style
guide.
