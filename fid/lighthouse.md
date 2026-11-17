# Lighthouse: FAIL ❌ (target 100; Performance, Accessibility, Best Practices; SEO not gated)

Site: https://main--tide--scdemos.aem.live · median of 1 runs per page and form factor

| page | form factor | performance | accessibility | best practices | seo |
|---|---|---|---|---|---|
| / | mobile | 100 | 96 | 96 | 61 |
| / | desktop | 99 | 100 | 96 | 61 |

## Fix list

### / (mobile)
- [ ] **performance · First Contentful Paint** (1.4 s) `first-contentful-paint`
- [ ] **accessibility · Touch targets do not have sufficient size or spacing.** `target-size` → `div > ul > li > a`, `div > ul > li > a`
- [ ] **best-practices · Issues were logged in the `Issues` panel in Chrome Devtools** `inspector-issues`

### / (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.064) `cumulative-layout-shift`
- [ ] **best-practices · Issues were logged in the `Issues` panel in Chrome Devtools** `inspector-issues`
