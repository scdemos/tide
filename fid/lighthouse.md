# Lighthouse: FAIL ❌ (target 100; Performance, Accessibility, Best Practices; SEO not gated)

Site: https://main--tide--scdemos.aem.live · median of 1 runs per page and form factor

| page | form factor | performance | accessibility | best practices | seo |
|---|---|---|---|---|---|
| / | mobile | 94 | 89 | 79 | 61 |
| / | desktop | 99 | 93 | 78 | 61 |

## Fix list

### / (mobile)
- [ ] **performance · First Contentful Paint** (1.5 s) `first-contentful-paint`
- [ ] **performance · Largest Contentful Paint** (1.6 s) `largest-contentful-paint`
- [ ] **performance · Total Blocking Time** (240 ms) `total-blocking-time`
- [ ] **performance · Speed Index** (3.0 s) `speed-index`
- [ ] **accessibility · Background and foreground colors do not have a sufficient contrast ratio.** `color-contrast` → `div.section > div.default-content-wrapper > p > strong`
- [ ] **accessibility · Links do not have a discernible name** `link-name` → `div.default-content-wrapper > ul > li > a`, `div.default-content-wrapper > ul > li > a`, `div.default-content-wrapper > ul > li > a`
- [ ] **accessibility · Touch targets do not have sufficient size or spacing.** `target-size` → `div > ul > li > a`, `div > ul > li > a`, `div.default-content-wrapper > ul > li > a`
- [ ] **best-practices · Uses third-party cookies** (1 cookie found) `third-party-cookies` → `https://adobedc.demdex.net/ee/v1/interact?configId=d73be188-bc37-4ede-a5da-8aa7cd1e343b&requestId=ae410163-952b-4506-b93e-a137ca193daf`
- [ ] **best-practices · Issues were logged in the `Issues` panel in Chrome Devtools** `inspector-issues`

### / (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.064) `cumulative-layout-shift`
- [ ] **accessibility · Background and foreground colors do not have a sufficient contrast ratio.** `color-contrast` → `div.section > div.default-content-wrapper > p > strong`
- [ ] **accessibility · Links do not have a discernible name** `link-name` → `div.default-content-wrapper > ul > li > a`, `div.default-content-wrapper > ul > li > a`, `div.default-content-wrapper > ul > li > a`
- [ ] **best-practices · Uses third-party cookies** (1 cookie found) `third-party-cookies` → `https://adobedc.demdex.net/ee/v1/interact?configId=d73be188-bc37-4ede-a5da-8aa7cd1e343b&requestId=d356d5a3-36b2-4442-817f-667d5c729da7`
- [ ] **best-practices · Issues were logged in the `Issues` panel in Chrome Devtools** `inspector-issues`
