# Lighthouse: FAIL ❌ (target 100; Performance, Accessibility, Best Practices; SEO not gated)

Site: https://main--tide--scdemos.aem.live · median of 1 runs per page and form factor

| page | form factor | performance | accessibility | best practices | seo |
|---|---|---|---|---|---|
| / | mobile | 100 | 96 | 100 | 61 |
| / | desktop | 100 | 100 | 100 | 61 |
| /shop | mobile | 99 | 95 | 100 | 61 |
| /shop | desktop | 100 | 99 | 100 | 61 |
| /shop/type/laundry-pods | mobile | 100 | 94 | 100 | 61 |
| /shop/type/laundry-pods | desktop | 100 | 98 | 100 | 61 |
| /our-commitment | mobile | 100 | 96 | 100 | 61 |
| /our-commitment | desktop | 98 | 100 | 100 | 61 |
| /our-commitment/tide-evo | mobile | 100 | 96 | 100 | 69 |
| /our-commitment/tide-evo | desktop | 100 | 100 | 100 | 69 |
| /how-to-wash-clothes | mobile | 100 | 96 | 100 | 61 |
| /how-to-wash-clothes | desktop | 99 | 100 | 100 | 61 |
| /how-to-wash-clothes/how-to-remove-stains | mobile | 100 | 94 | 100 | 69 |
| /how-to-wash-clothes/how-to-remove-stains | desktop | 100 | 98 | 100 | 69 |
| /how-to-wash-clothes/how-to-do-laundry | mobile | 100 | 94 | 100 | 69 |
| /how-to-wash-clothes/how-to-do-laundry | desktop | 93 | 98 | 100 | 69 |
| /latest-news | mobile | 100 | 96 | 100 | 61 |
| /latest-news | desktop | 99 | 100 | 100 | 61 |
| /rewards | mobile | 100 | 96 | 100 | 61 |
| /rewards | desktop | 100 | 100 | 100 | 61 |
| /contact-us | mobile | 100 | 96 | 100 | 69 |
| /contact-us | desktop | 99 | 100 | 100 | 69 |
| /rewards/loyalty/terms-and-conditions | mobile | 100 | 96 | 96 | 69 |
| /rewards/loyalty/terms-and-conditions | desktop | 99 | 100 | 96 | 69 |

## Fix list

### / (mobile)
- [ ] **performance · First Contentful Paint** (1.4 s) `first-contentful-paint`
- [ ] **accessibility · Touch targets do not have sufficient size or spacing.** `target-size` → `div > ul > li > a`, `div > ul > li > a`

### / (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.059) `cumulative-layout-shift`

### /shop (mobile)
- [ ] **performance · First Contentful Paint** (1.2 s) `first-contentful-paint`
- [ ] **performance · Largest Contentful Paint** (1.8 s) `largest-contentful-paint`
- [ ] **accessibility · Image elements have `[alt]` attributes that are redundant text.** `image-redundant-alt` → `a.product-grid-link > div.product-grid-image > picture > img`, `a.product-grid-link > div.product-grid-image > picture > img`, `a.product-grid-link > div.product-grid-image > picture > img`
- [ ] **accessibility · Touch targets do not have sufficient size or spacing.** `target-size` → `div > ul > li > a`, `div > ul > li > a`

### /shop (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.059) `cumulative-layout-shift`
- [ ] **accessibility · Image elements have `[alt]` attributes that are redundant text.** `image-redundant-alt` → `a.product-grid-link > div.product-grid-image > picture > img`, `a.product-grid-link > div.product-grid-image > picture > img`, `a.product-grid-link > div.product-grid-image > picture > img`

### /shop/type/laundry-pods (mobile)
- [ ] **performance · First Contentful Paint** (1.2 s) `first-contentful-paint`
- [ ] **accessibility · Heading elements are not in a sequentially-descending order** `heading-order` → `main#site-content > div.section > div.default-content-wrapper > h3#why-shop-laundry-detergent-pacs`
- [ ] **accessibility · Image elements have `[alt]` attributes that are redundant text.** `image-redundant-alt` → `a.product-grid-link > div.product-grid-image > picture > img`, `a.product-grid-link > div.product-grid-image > picture > img`, `a.product-grid-link > div.product-grid-image > picture > img`
- [ ] **accessibility · Touch targets do not have sufficient size or spacing.** `target-size` → `div > ul > li > a`, `div > ul > li > a`

### /shop/type/laundry-pods (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.059) `cumulative-layout-shift`
- [ ] **accessibility · Heading elements are not in a sequentially-descending order** `heading-order` → `main#site-content > div.section > div.default-content-wrapper > h3#why-shop-laundry-detergent-pacs`
- [ ] **accessibility · Image elements have `[alt]` attributes that are redundant text.** `image-redundant-alt` → `a.product-grid-link > div.product-grid-image > picture > img`, `a.product-grid-link > div.product-grid-image > picture > img`, `a.product-grid-link > div.product-grid-image > picture > img`

### /our-commitment (mobile)
- [ ] **performance · First Contentful Paint** (1.2 s) `first-contentful-paint`
- [ ] **accessibility · Touch targets do not have sufficient size or spacing.** `target-size` → `div > ul > li > a`, `div > ul > li > a`

### /our-commitment (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.088) `cumulative-layout-shift`

### /our-commitment/tide-evo (mobile)
- [ ] **performance · First Contentful Paint** (1.2 s) `first-contentful-paint`
- [ ] **accessibility · Touch targets do not have sufficient size or spacing.** `target-size` → `div > ul > li > a`, `div > ul > li > a`

### /our-commitment/tide-evo (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.059) `cumulative-layout-shift`

### /how-to-wash-clothes (mobile)
- [ ] **performance · First Contentful Paint** (1.2 s) `first-contentful-paint`
- [ ] **accessibility · Touch targets do not have sufficient size or spacing.** `target-size` → `div > ul > li > a`, `div > ul > li > a`

### /how-to-wash-clothes (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.063) `cumulative-layout-shift`

### /how-to-wash-clothes/how-to-remove-stains (mobile)
- [ ] **performance · First Contentful Paint** (1.2 s) `first-contentful-paint`
- [ ] **accessibility · Heading elements are not in a sequentially-descending order** `heading-order` → `main#site-content > div.section > div.default-content-wrapper > h5#what-are-the-different-types-of-stains`, `main#site-content > div.section > div.default-content-wrapper > h5#recommended-products`
- [ ] **accessibility · Image elements have `[alt]` attributes that are redundant text.** `image-redundant-alt` → `article > div.cards-card-image > picture > img`, `article > div.cards-card-image > picture > img`, `article > div.cards-card-image > picture > img`
- [ ] **accessibility · Touch targets do not have sufficient size or spacing.** `target-size` → `div > ul > li > a`, `div > ul > li > a`

### /how-to-wash-clothes/how-to-remove-stains (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.056) `cumulative-layout-shift`
- [ ] **accessibility · Heading elements are not in a sequentially-descending order** `heading-order` → `main#site-content > div.section > div.default-content-wrapper > h5#what-are-the-different-types-of-stains`, `main#site-content > div.section > div.default-content-wrapper > h5#recommended-products`
- [ ] **accessibility · Image elements have `[alt]` attributes that are redundant text.** `image-redundant-alt` → `article > div.cards-card-image > picture > img`, `article > div.cards-card-image > picture > img`, `article > div.cards-card-image > picture > img`

### /how-to-wash-clothes/how-to-do-laundry (mobile)
- [ ] **performance · First Contentful Paint** (1.3 s) `first-contentful-paint`
- [ ] **accessibility · Heading elements are not in a sequentially-descending order** `heading-order` → `article.article-body > div.section > div.default-content-wrapper > h4#normalregular-cycle`
- [ ] **accessibility · Touch targets do not have sufficient size or spacing.** `target-size` → `div > ul > li > a`, `div > ul > li > a`

### /how-to-wash-clothes/how-to-do-laundry (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.16) `cumulative-layout-shift`
- [ ] **accessibility · Heading elements are not in a sequentially-descending order** `heading-order` → `article.article-body > div.section > div.default-content-wrapper > h4#normalregular-cycle`

### /latest-news (mobile)
- [ ] **performance · First Contentful Paint** (1.3 s) `first-contentful-paint`
- [ ] **accessibility · Touch targets do not have sufficient size or spacing.** `target-size` → `div > ul > li > a`, `div > ul > li > a`

### /latest-news (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.073) `cumulative-layout-shift`

### /rewards (mobile)
- [ ] **performance · First Contentful Paint** (1.2 s) `first-contentful-paint`
- [ ] **accessibility · Touch targets do not have sufficient size or spacing.** `target-size` → `div > ul > li > a`, `div > ul > li > a`

### /rewards (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.048) `cumulative-layout-shift`

### /contact-us (mobile)
- [ ] **performance · First Contentful Paint** (1.2 s) `first-contentful-paint`
- [ ] **accessibility · Touch targets do not have sufficient size or spacing.** `target-size` → `div > ul > li > a`, `div > ul > li > a`

### /contact-us (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.064) `cumulative-layout-shift`

### /rewards/loyalty/terms-and-conditions (mobile)
- [ ] **performance · First Contentful Paint** (1.3 s) `first-contentful-paint`
- [ ] **accessibility · Touch targets do not have sufficient size or spacing.** `target-size` → `div > ul > li > a`, `div > ul > li > a`
- [ ] **best-practices · Browser errors were logged to the console** `errors-in-console`

### /rewards/loyalty/terms-and-conditions (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.083) `cumulative-layout-shift`
- [ ] **best-practices · Browser errors were logged to the console** `errors-in-console`
