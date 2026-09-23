# Zornitsa Pesheva Portfolio

A static, responsive portfolio built with Vite, semantic HTML, modern CSS, and vanilla JavaScript. Node.js is only used for local development and production builds.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and run

```bash
npm install
npm run dev
```

Vite prints a local URL, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The static site is generated in `dist/`. Deploy that folder to a static host such as GitHub Pages, Netlify, Cloudflare Pages, or Azure Static Web Apps.

## Customization

Visible content is in `index.html`. Styling is in `src/style.css`; `src/main.js` manages the theme switch, mobile navigation, and footer year.

Replace these placeholders before publishing:

- `YOUR_LINKEDIN_URL`
- `YOUR_GITHUB_URL`
- `YOUR_CV_FILE`
- `YOUR_PHOTO_FILE`
- `YOUR_EMAIL`
- `YOUR_OG_IMAGE_URL`
- `ORGCHART_APP_URL`
- `FAMILY_TREE_APP_URL`
- `YOUR_TECHNOLOGIES`
- `YOUR_ROLE`
- `YOUR_EDITABLE_PROJECT_DESCRIPTION`
- `YOUR_EDITABLE_RESPONSIBILITIES`
- `PROJECT IMAGE / SCREENSHOT PLACEHOLDER`

Add a photo or project image under `public/`, then replace its associated placeholder in `index.html`.

## Accessibility and behavior

- Keyboard-accessible navigation, visible focus states, skip link, and semantic landmarks.
- Sticky responsive navigation with an accessible menu control.
- Light/dark preference is saved in local storage and defaults to the operating system preference.
- Smooth scrolling and visual changes respect `prefers-reduced-motion`.
- Print styles remove nonessential navigation and backgrounds.

## Favicon

`public/favicon.svg` is a placeholder. Replace it with your own favicon when ready.
