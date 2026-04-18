Backend Project README

Why this backend does not need a build
- This backend runs on Node.js directly from source (`server.js`).
- The codebase is plain JavaScript (ES modules), not TypeScript.
- There is no transpile or bundle step required before execution.
- Because of that, `npm run dev` is enough to start the backend.

How to run or debug the backend, two ways:

1) Run or debug from an IntelliJ terminal opened in the `backend` project:
  non debug run --> npm run dev
  debug run     --> node --inspect server.js

2) Run or debug from `package.json` in IntelliJ
    1) Open `backend/package.json`.
    2) Find the `dev` script.
    3) Click the green play icon beside `dev`.
    4) Choose:
        - Run 'dev' (normal execution), or
        - Debug 'dev' (start with IntelliJ debugger session).

Notes
- Debugging backend code is done in IntelliJ.
- Frontend code is typically debugged in the browser DevTools.

