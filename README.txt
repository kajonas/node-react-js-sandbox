The application is setup as a parent project with children projects, frontend, and backend
The frontend is written in react version 18
The Backend is written in Node.js
The frontend is the only child project that needs to be build, currently, Node is able to use backend w/o a build

This parent project's package.json is setup so we can perform our build, and run from the parent's root directory.

// Build
npm run build

// Run
npm run dev
