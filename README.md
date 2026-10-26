# vincentveri.it

Personal website and blog of Vincent Veri, built with [Hugo](https://gohugo.io/) and a local theme. The focus is on content over design. Posts are written in Italian.

## Requirements

- Hugo **>= 0.146.0** (the extended edition is not required)
- Git, to clone the repository

## Getting started

```sh
git clone <repository-url>
cd vincentveri.it
hugo server -D      # dev server with drafts and live reload at http://localhost:1313
```

## Commands

```sh
hugo server -D                      # dev server, includes drafts
hugo                                # production build into public/
hugo new content posts/<slug>.md    # new post from archetypes/default.md (draft = true)
hugo list all                       # list every page Hugo will build, with source path
```

## Project structure

```text
.
├── content/            # site content (Markdown)
│   ├── _index.md       # home page intro
│   ├── about/          # about page
│   ├── astro-e-renoir/ # page bundle with its images
│   └── posts/          # blog posts (TOML front matter, +++)
├── hugo.toml           # site configuration
├── themes/
│   └── minimalista/    # local theme: layouts, CSS, JS, archetypes
├── static/             # files copied as-is (favicons, web manifest)
├── layouts/, assets/   # root overrides of theme files (empty for now)
└── public/             # generated site (gitignored)
```

## Architecture

### Configuration

`hugo.toml` holds the site-level settings: `baseURL`, `locale` (`it-it`), `title`, the active `theme`, and the image cache location.

### Theme (`themes/minimalista/`)

- **Layouts**: `baseof.html`, `home.html`, `page.html`, `section.html`, `taxonomy.html`, `term.html`, with partials in `layouts/_partials/` (header, footer, menu, summary, date, terms, head).
- **Shortcodes**: `layouts/_shortcodes/`.
- **Styles**: a single `assets/css/main.css`, a centered 720px column, with Playfair Display (headings) and Source Serif 4 (body) loaded from Google Fonts in `_partials/head.html`.
- **Dark mode**: colors are `light-dark()` custom properties. The active theme is set through `color-scheme` and a `data-theme` attribute on `<html>`.
- **Theme script**: `assets/js/main.js` sets `data-theme` from `localStorage`, falling back to the OS preference, and handles the `#theme-toggle` button. It is a synchronous script in `<head>` so the theme applies before first paint, so do not add `defer` or `async`.
- **Asset pipeline**: `_partials/head/css.html` and `head/js.html` run `css.Build` and `js.Build`. In development the output is unminified with linked sourcemaps. In production it is minified, fingerprinted, and loaded with SRI integrity hashes.
- **Menu**: the main menu (Home, Blog, About) is defined in the theme's `hugo.toml` and merged into the site configuration.

### Content

- The home page renders the body of `content/_index.md`. It does not list posts.
- Posts go in `content/posts/` and use TOML front matter (`+++`). They are served under `/posts`.
- Page bundles (a folder with `index.md` plus its images) are used for pages that have media, such as `about/` and `astro-e-renoir/`.
- New posts start as drafts (`draft = true` from the archetype). Set `draft = false` to publish.

## Deployment

Not configured yet. `hugo` writes the production site to `public/`, which can be uploaded to any static host.

Before going live, update `baseURL` in `hugo.toml` if it does not match the final domain.

## Notes

- No Node/npm toolchain, tests, or linter. Asset bundling is handled by Hugo.
- `public/` and `.hugo_build.lock` are build artifacts and should not be committed.
