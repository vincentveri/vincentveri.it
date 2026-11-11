# Spec: RSS feed

## Objective
Let readers (and feed readers) subscribe to new posts on vincentveri.com. Hugo already generates RSS for the home, sections, and taxonomies by default, but nothing links to it and the output is not tuned for this site. Goal: one well-formed, discoverable feed of blog posts, in Italian.

Success = a reader pastes `https://vincentveri.com/` into a feed reader and it auto-discovers `https://vincentveri.com/posts/index.xml`, listing posts with title, link, date, and summary.

## Tech Stack
Hugo 0.161 (theme requires >= 0.146), local theme `themes/minimalista`. No new dependencies. Uses Hugo's built-in RSS output format and `_internal/rss.xml` template (or a theme override at `layouts/rss.xml`).

## Commands
```
Dev:    hugo server -D
Build:  hugo
Check:  hugo --gc --minify && cat public/posts/index.xml
List:   hugo list all
```

## Project Structure
```
hugo.toml                                   -> site-level outputs / params
themes/minimalista/layouts/_partials/head.html -> add <link rel="alternate" type="application/rss+xml">
themes/minimalista/layouts/_partials/footer.html -> visible "RSS" link next to Instagram/LinkedIn
themes/minimalista/layouts/rss.xml          -> (only if the default template is not sufficient)
```

## Code Style
Match existing partials: plain Hugo templates, no extra markup or CSS. Example of the head link:
```go-html-template
{{ with .OutputFormats.Get "rss" -}}
  <link rel="alternate" type="application/rss+xml" title="{{ site.Title }}" href="{{ .Permalink }}">
{{- end }}
```

## Testing Strategy
No test framework in this repo. Verification is manual and build-based:
- `hugo` builds with no warnings/errors.
- Inspect generated XML; validate with an RSS validator (W3C Feed Validation Service) against the built file.
- Check the `<head>` link and footer link in the rendered HTML.

## Boundaries
- Always: keep Italian content untouched; keep theme minimal (no CSS/JS additions); verify with a production build.
- Ask first: adding dependencies, changing `baseURL`, switching to full-content feeds, adding Atom/JSON Feed.
- Never: include drafts in the feed; edit `public/`; commit unrelated changes.

## Success Criteria
1. `public/posts/index.xml` exists, is valid RSS 2.0, and contains every non-draft post (newest first) with title, permalink, `pubDate`, and the post `summary`.
2. Feed uses `<language>it-it</language>` and the site title/description from `hugo.toml`.
3. All pages' `<head>` contain an RSS `<link rel="alternate">` pointing at the posts feed.
4. Footer shows a visible "RSS" link to the feed.
5. Taxonomy/term feeds and a home-level feed are not advertised (see Open Questions).
6. `hugo` build succeeds with no new warnings; feed has no theme placeholder entries (`post-1..3` from the theme's `content/`), which is blocked by the known gotcha in CLAUDE.md.

## Assumptions
1. Feed is for the blog posts section only, at Hugo's default `/posts/index.xml` path (not `/index.xml`, not `/feed.xml`).
2. Summary-only feed (uses the front-matter `summary`), not full content. Readers click through to the site.
3. RSS 2.0 only; no Atom/JSON Feed.
4. Production `baseURL` `https://vincentveri.com/` is correct, so absolute links work.
5. Hugo's default `rss.xml` is adequate; a custom template is added only if validation shows problems.
6. Deploy on Vercel needs no config change since the feed is a static file.

## Open Questions
1. Do you prefer the feed at `/feed.xml` or `/index.xml` instead of `/posts/index.xml`?
2. Should the home page and tag pages keep Hugo's auto-generated feeds, or be disabled to avoid stray files (`[outputs]` in `hugo.toml`)?
3. Summary-only versus full-content feed?
4. Do the theme's placeholder posts (`post-1..3`) still exist in the build? If so, should I remove them as part of this work or leave that separate?
