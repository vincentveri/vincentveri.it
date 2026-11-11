# Plan: RSS feed (implements SPEC.md)

## Findings
- Theme placeholder posts (post-1..3) no longer exist, so spec Open Question 4 is moot.
- Open Questions 1-3 unanswered: proceeding with spec defaults (feed at /posts/index.xml, summary-only, RSS 2.0).
- No existing RSS references in the theme.

## Components / order
1. Disable unwanted feeds (home, taxonomies) via `[outputs]` in hugo.toml; keep section feed. Sequential, first, so later checks see the final output set.
2. Add `<link rel="alternate">` in theme `head.html` (depends on 1: needs the posts feed to exist).
3. Add visible "RSS" link in theme `footer.html` (independent of 2; can be parallel).
4. Validate built XML; add custom `layouts/rss.xml` only if validation fails.

## Risks
- Hugo's default rss uses `<description>` = summary (front-matter `summary` wins over auto summary): confirm in output.
- Pages without a `posts` feed (e.g. /about) must link to the posts feed, not their own: use `site.GetPage "/posts"`.
- Italian `locale` yields `<language>it-it</language>`: confirm.

## Checkpoints
- After 1: `hugo` builds; only `public/posts/index.xml` RSS file exists (plus none for home/tags).
- After 3: full build + manual XML/HTML inspection + W3C validation.
