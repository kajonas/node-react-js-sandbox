The application is setup as a parent project with children projects, frontend, and backend
The frontend is written in react version 18
The Backend is written in Node.js
The frontend is the only child project that needs to be built.  Currently, Node is able to use backend w/o a build

This parent project's package.json is setup so we can perform our build, and run from the parent's root directory.

// Build
npm run build

// Run
npm run dev

// Debug
Got to each project frontend, and backend, and read the README.txt
for instructions on how to debug each project.

// Accessing via browser
To access the frontend, open a browser and navigate to --> http:localhost:5173.
This url is the default for Vite.  It was found in the file frontend/vite.config.js,
in the server section, under port.
