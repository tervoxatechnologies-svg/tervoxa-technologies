# Tervoxa Technologies — React + Node.js Website

Production-oriented commercial website built with React/Vite on the frontend and Express/Node.js on the backend.

## Stack
- React 19 + React Router
- Vite
- Express 5 / Node.js
- Helmet + CORS
- Request validation, rate limiting and structured request IDs
- MongoDB inquiry persistence with Google Forms → Google Sheets synchronization
- Responsive CSS with reduced-motion support

## Run
```bash
npm run install:all
npm run dev
```
Frontend: http://localhost:5173
API: http://localhost:5000

## Google Forms integration
The supplied Google Form is configured as a secondary delivery channel after MongoDB persistence. The server uses the form's `/formResponse` action and the confirmed field mappings:

```env
GOOGLE_FORM_ACTION_URL=https://docs.google.com/forms/d/e/FORM_ID/formResponse
GOOGLE_ENTRY_FULL_NAME=entry.2005620554
GOOGLE_ENTRY_EMAIL=entry.1045781291
GOOGLE_ENTRY_PHONE=entry.1166974658
GOOGLE_ENTRY_COMPANY=entry.1377638271
GOOGLE_ENTRY_SERVICE=entry.2087812935
GOOGLE_ENTRY_PROJECT=entry.27492672
```

The backend validates required fields and stores every accepted inquiry in MongoDB before forwarding it to Google Forms. The website's separate `message` field remains in MongoDB because the supplied Google Form has no separate message question. If Google Forms is temporarily unavailable, the MongoDB record is retained with a `sync_failed` status.

### Production API configuration

Copy `server/.env.example` to `server/.env` and set `MONGODB_URI`. Set `CLIENT_ORIGIN` to the exact comma-separated frontend origin(s) in production. If the API is behind a reverse proxy, set `TRUST_PROXY=true` so rate limiting can identify client IPs correctly.

The API exposes `/api/health` for liveness and `/api/ready` for readiness. The readiness endpoint returns `503` until MongoDB is connected. Inquiry submissions are limited by `INQUIRY_RATE_LIMIT_MAX` within `INQUIRY_RATE_LIMIT_WINDOW_MS`, and the upstream Google Forms request has a configurable timeout.

## Company accounts and project workspace

Companies can create an account at `/register`, sign in at `/login`, and register projects from their client workspace at `/dashboard`. Project records are private to the owning company. Administrators use `/admin` to review all submitted projects and update their status.

Authentication uses bcrypt password hashing and short-lived JWT sessions stored in an HTTP-only cookie. To provision the first administrator, set `ADMIN_EMAIL`, `ADMIN_PASSWORD` (minimum 12 characters), and a long random `JWT_SECRET` in `server/.env` before starting the API. The server creates or updates that administrator on startup; there is no public admin sign-up route.

### Google sign-in setup

Create a Web application OAuth client in Google Cloud Console. Add the exact redirect URI below to the OAuth client:

`http://localhost:5000/api/auth/google/callback`

Then set `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `GOOGLE_REDIRECT_URI` in `server/.env`. For production, use the HTTPS callback URL of the deployed API and add that URL to the Google OAuth client as well. Google sign-in verifies the returned ID token, matches existing accounts by verified email, and then uses the same client/admin roles as password login.

## Build
```bash
npm run build
```

The client output is generated in `client/dist`. For a production deployment, serve that static output from your preferred frontend host and deploy the Express API separately, setting `VITE_API_URL` in the client environment.

## Content source
Business positioning and service content follow the supplied Tervoxa Technologies requirements. Missing official business contact details remain explicit placeholders rather than invented information.
