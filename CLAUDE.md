# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website/blog for Vincent Veri, built with Hugo (static site generator). It replaces a previous Next.js site; the focus is on content over design. Post content is written in Italian.

No Node/npm toolchain, tests, or linter: Hugo's built-in asset pipeline (`css.Build`, `js.Build`) handles CSS/JS bundling and minification.

## Commands

```sh
hugo server -D          # dev server with drafts, live reload (http://localhost:1313)
hugo                    # production build into public/ (minified + fingerprinted assets)
hugo new content posts/<slug>.md   # new post from archetypes/default.md (draft = true)
hugo list all           # list every page Hugo will build, with source path
```

Theme requires Hugo >= 0.146.0 (non-extended is enough).

## Architecture

- **Site config** (`hugo.toml`) is minimal: title, locale, `theme = 'minimalista'`. `baseURL` is still the placeholder `https://example.org/`.
- **Theme** `themes/minimalista/` is a local theme (scaffolded with `hugo new theme`) that holds all layouts, CSS, and JS. The root `layouts/`, `assets/`, `static/`, `i18n/`, `data/` dirs are empty; files placed there override the theme's equivalents by path.
  - Uses the Hugo ≥0.146 template layout: `layouts/baseof.html`, `home.html`, `page.html`, `section.html`, `taxonomy.html`, `term.html`, with partials in `layouts/_partials/`.
  - Newspaper-article design kept deliberately minimal: a single `assets/css/main.css`, centered 720px column, two serif fonts (Playfair Display for headings, Source Serif 4 for body) loaded from Google Fonts in `_partials/head.html`. Shared list/date markup lives in `_partials/summary.html` and `_partials/date.html`; footer contact info and links are hardcoded placeholders in `_partials/footer.html`.
  - Dark theme: colors are `light-dark()` custom properties in `main.css`, switched via `color-scheme` and a `data-theme` attribute on `<html>`. `assets/js/main.js` sets `data-theme` from `localStorage` (falling back to the OS preference) and handles the `#theme-toggle` button in the header. It must stay a synchronous script in `<head>` so the theme applies before first paint.
  - `_partials/head/css.html` and `head/js.html` build `assets/css/main.css` and `assets/js/main.js`; unminified with linked sourcemaps in development, minified + fingerprinted with SRI in production.
  - The main menu (Home / Posts / Tags) is defined in the **theme's** `hugo.toml` and merged into the site config.
- **Content**: the home page renders only the body of `content/_index.md` (a short personal intro, no post list). Posts live in `content/posts/` (TOML front matter, `+++`). Use `posts/`, not `post/`, so they match the theme's `/posts` section and menu.

## Gotchas

- Hugo mounts the theme's `content/` directory too, so the theme's placeholder pages (`themes/minimalista/content/_index.md`, `posts/_index.md`, `post-1`, `post-2`, `post-3`) are currently built into the real site. Delete them or override them in the root `content/` when they should no longer appear.
- `public/` and `.hugo_build.lock` are build artifacts; `public/` is gitignored.
