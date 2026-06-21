# AGENTS.md

## Project Snapshot
- Monorepo with npm workspaces: `backend` (Express API) and `frontend` (React + Vite).
- Purpose is a stream-learning sandbox: each UI card triggers one backend endpoint and renders returned/streamed output.
- Root orchestrates dev/build; backend is run directly with Node (no transpile step).

## Architecture and Data Flow
- Backend entry: `backend/server.js` (single Express app on `3001`, CORS enabled globally).
- Frontend entry: `frontend/src/main.jsx` -> `frontend/src/app.jsx` (composes all demo cards in one page).
- Shared request helper: `frontend/src/api/api.js` (`callEndpoint`) used by non-streaming cards.
- Streaming UIs (`FetchStreamUI`, `SSRStreamUI`) bypass `callEndpoint` and consume `ReadableStream` via `res.body.getReader()`.
- Card wrapper `frontend/src/components/StreamExampleCard.jsx` controls Run/Close UX and conditional output rendering.

## Commands and Local Workflow
- Install deps from repo root: `npm install` (workspace install for both projects).
- Start (non-debug) both apps from root: `npm run dev` (Windows script opens two `cmd` windows and runs backend + frontend workspace `dev` scripts).
- Build from root: `npm run build` (delegates to frontend `vite build`; backend has no build script).
- Backend-local run/debug (from `backend/README.txt`):
  - Open `backend/package.json`, and select Run/Debug on `dev` target.
  - Or inside `backend`
    - Run: `npm run dev`
    - Debug: `node --inspect server.js`
- Frontend scripts: `npm run dev`, `npm run build`, and `npm run preview` (inside `frontend/`).
  - It's assumed all front-end debugging will occur in browser
- There is no test/lint script configured in current `package.json` files.

## API Contracts Used by Frontend
- Text endpoints via `callEndpoint`: `/api/readable`, `/api/writable`, `/api/transform`, `/api/pipe`.
- Streaming endpoints consumed chunk-by-chunk in UI: `/api/fetch-stream`, `/api/ssr-stream`.
- Frontend uses hard-coded backend origin `http://localhost:3001` (no Vite proxy currently configured).
- `/api/writable` writes server-side file `backend/data/output.txt`; `/api/pipe` targets `backend/data/piped-output.txt`.

## Project-Specific Conventions
- Components are small and demo-focused; each card owns local `useState` for output.
- Function components and hooks only; no class components, no global state library.
- Keep endpoint names and card titles aligned (example: `TransformStreamUI` -> `/api/transform`).
- Comments are educational and intentionally verbose in demo code; preserve teaching clarity when editing.

## Known Gotchas
- `frontend/src/main.jsx` imports `./App` while file is `app.jsx`; this works on Windows but is case-sensitive on Linux.
- Route modules now live in `backend/streams/*.js`; keep route paths aligned with frontend cards when editing modules.

## Recent Fixes
- Fixed `/api/pipe` endpoint: now uses correctly cased `fs.createReadStream()` / `fs.createWriteStream()`.
- Enhanced `frontend/src/api/api.js` `callEndpoint` to throw on non-2xx HTTP responses (improved error visibility).
- Added JSDoc type hint for `fs` module import to improve IDE type inference in `backend/server.js`.

## KAJ Rules for this project
- Before referring to line numbers, reference the literal code text or re-read the current attached file.