# Tasks: RSS feed

- [ ] Task 1: Restrict RSS output to the posts section
  - Acceptance: only `public/posts/index.xml` generated as RSS; home/taxonomy/term feeds absent
  - Verify: `hugo --gc --minify && find public -name "index.xml"`
  - Files: hugo.toml

- [ ] Task 2: Add feed autodiscovery link to head
  - Acceptance: every page's `<head>` has `<link rel="alternate" type="application/rss+xml" ...>` pointing to `https://vincentveri.com/posts/index.xml`
  - Verify: `hugo` then grep `rel="alternate"` in public/index.html and public/about/index.html
  - Files: themes/minimalista/layouts/_partials/head.html

- [ ] Task 3: Add footer "RSS" link
  - Acceptance: footer list shows an RSS link to the posts feed
  - Verify: grep footer in built HTML; visual check with `hugo server -D`
  - Files: themes/minimalista/layouts/_partials/footer.html

- [ ] Task 4: Validate feed
  - Acceptance: valid RSS 2.0; items have title, link, pubDate, description=summary; no drafts; language it-it
  - Verify: inspect public/posts/index.xml; W3C Feed Validator
  - Files: none (or themes/minimalista/layouts/rss.xml only if validation fails)
