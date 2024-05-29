# Book Library Sample App

This is a sample app to manage a personal book library with a search powered via the OpenLibrary API. This was built
using
vite, react, mui, redux toolkit, rtk query, redux-persist and styled components

## Installation and running

To run the app, navigate to the base of the project and `npm install` and then vite handles the dev server
via `npm run dev`.

The app is accessible at `http://localhost:5173/`.

## Interaction

On first use the main screen will be mostly empty with a search input
to search for books to add to the users library. After entering a query and hitting enter or the form button 3 results
can return and the user can add them to their library. The user can update "read" status or remove the books from their
library in this section.

Updates to the users library are persisted via localstorage to somewhat simulate an API. 

