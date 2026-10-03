# Tervoxa Technologies

Static frontend for Tervoxa Technologies, built with plain HTML, CSS and
JavaScript. The site is ready to publish directly from this repository with
GitHub Pages.

## Local preview

Because the site uses multiple directory-based pages, serve the repository
with a local static server rather than opening `index.html` directly:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## GitHub Pages

1. Push the `main` branch to GitHub.
2. In **Settings > Pages**, choose **Deploy from a branch**.
3. Select `main` and the `/ (root)` folder, then save.
4. GitHub Pages will publish the static files in this repository.

The `.nojekyll` file is included so GitHub Pages serves the site exactly as
uploaded. `CNAME` is set to `tervoxatechnologies.com` for the custom domain.

## GoDaddy DNS

After configuring the custom domain in GitHub Pages, set these DNS records in
GoDaddy:

- `A` records for `@` to `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, and `185.199.111.153`
- A `CNAME` record for `www` pointing to
  `tervoxatechnologies-svg.github.io`

DNS changes can take time to propagate. Enable **Enforce HTTPS** in GitHub
Pages once the domain has been verified.
