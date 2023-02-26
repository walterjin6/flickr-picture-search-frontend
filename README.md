# Flickr Picture Search

### [Click me to view Demo Website](https://monashflickr.onrender.com/)

This project is the frontend part for searching Flicker pictures through APIs provided by Flickr.

## Instructions

Launch the backend server first from [here](https://github.com/walterjin6/monashflickr-backend)

First clone this repository:  git clone https://github.com/walterjin6/monashflickr-frontend.git

Install dependencies: npm install

Run App: npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

After the page is loaded, type in the tags keyword you want to search and hit `Enter` key or click on the `Search` button, a search will be triggered. Login is required before searching.  Contact [me](mailto:jinwei6@gmail.com) for login password and `.env` file information.

Test APP: npm test

Build APP: npm run build

## Features

1.  Input validation on login and search
2.  OAuth 2.0: use refresh token, Access token, JWT Authentication
3.  Persist login by select "trust this device" on login form
4.  View public pictures via public API without login needed
5.  View private pictures via private API with login needed
6.  Use Redux Toolkit query to manage global state and cache

## Main Tech Stacks used

1. React: to construct UI components
2. React Router: to navigate between pages
3. Redux Toolkit Query: for server request, global state and cache management
4. TailwindCSS: to style the UI
5. Jest: to run tests and provide test coverage