# Cheaf Perception Gap

A Noisia Social Intelligence Snapshot built as a standalone single-page site for private outreach to Cheaf.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The build outputs a single-file site at:

```txt
dist/index.html
```

## GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml`.

After pushing to GitHub, the site should deploy to:

```txt
https://noisia-ai.github.io/freebies/
```

If Pages is not enabled yet:

1. Open repository settings.
2. Go to `Pages`.
3. Set source to `GitHub Actions`.
4. Push to `main`.

The workflow builds the Vite site and publishes `dist/`.
