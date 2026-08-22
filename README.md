# Tervoxa Technologies — Website

A responsive, modern single-page business website for Tervoxa Technologies.

## Service areas
1. Website Development
2. Mobile Application Development
3. Cybersecurity Services
4. Business Tax & Compliance
5. Meta Ads & Digital Advertising

## Features
- Responsive desktop / tablet / mobile layout
- Original Tervoxa logo, used in the header (stacked above the wordmark), hero
  centerpiece, footer, and favicon
- Rotating hero showcase and animated section reveals
- Service cards with interactive "view capabilities" modals
- Contact section with phone, email and location
- Enquiry form connected live to the official Tervoxa Google Form
  (https://forms.gle/1TLfiA19rep6vguv7) — submissions land directly in that
  form's responses
- SEO-friendly metadata, no backend required

## Images
All imagery ships locally inside `assets/`, so the site has no external image dependency.

## Notes
- The contact form's `action` URL had a missing hyphen in the form ID in the
  original file, which would have caused every submission to fail silently.
  That's fixed — the form now posts to the correct, verified form ID.
- `tervoxatechnologies@gmail.com` in the footer/contact section is carried
  over from the original file — confirm this is the live inbox before launch.

## Run locally
Open `index.html` directly in a browser, or serve it locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy
This is a fully static site and can be deployed anywhere that serves
static files (Vercel, Netlify, GitHub Pages, etc.):
1. Push the project to a Git repository.
2. Import it into your host of choice.
3. Framework preset: Other / static.
4. Build command: none. Output directory: `.`

## Main files
- `index.html` — page structure and content
- `style.css` — design system and responsive styling
- `script.js` — navigation, service modals, hero rotation, form handling
- `assets/tervoxa-logo.jpg` — official logo (header, hero, footer, favicon)
