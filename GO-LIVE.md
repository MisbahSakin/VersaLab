# VersaLab — launch record

**Live at https://www.versalab.org** (the bare domain 308-redirects to it).

---

## Live setup

| Piece | Where it lives |
| --- | --- |
| Hosting | Vercel, auto-deploys from `main` on this repo |
| Domain | `versalab.org` — DNS at mycloudsweb (`ns7/ns8.mycloudsweb.com`) |
| Canonical host | `www.versalab.org` |
| Contact form | EmailJS → SMTP `mail.versalab.org:465` → `contact@versalab.org` |
| Email | Unchanged on the original cPanel server, `151.158.44.115` |

### DNS — do not break these

```
versalab.org    A      76.76.21.21          → Vercel (website)
www             CNAME  ...vercel-dns-017.com → Vercel (website)
mail            A      151.158.44.115       → cPanel (MAIL — do not touch)
@               MX  0  mail.versalab.org.   → (MAIL — do not touch)
_vercel         TXT    two records, one per hostname
@               TXT    google-site-verification
```

The `mail` A record and the `MX` record are the only things keeping
`contact@versalab.org` alive, and the contact form sends through that same SMTP
host. They deliberately point at the *old* server. Never "tidy them up".

---

## Verified at launch

- [x] Both hostnames serve valid certificates; apex redirects to `www`
- [x] All 7 routes plus the 404 return 200 (Vercel SPA rewrite in `vercel.json`)
- [x] Contact form sends and the email arrives — tested on the live domain
- [x] Form fails safely: validation blocks empty submits, a failed send shows the
      contact address with a working mailto, never a false success, and keeps what
      the visitor typed
- [x] Canonical / og / JSON-LD / robots / sitemap all point at `www` and resolve
      200 with no redirect
- [x] One `<h1>` and one unique description per route; no console errors
- [x] Zero horizontal overflow at 390 / 768 / 1440
- [x] Footer contrast meets WCAG AA
- [x] Google Search Console property verified

---

## Ongoing

- [ ] **Watch EmailJS usage weekly for the first month.** The free tier has no
      domain whitelist, so the public key in the bundle is unrestricted. Nobody can
      redirect the mail (the template hardcodes the recipient), but someone could
      burn the 200/month quota — after which real inquiries fail silently.
      If sends climb without matching inbox mail: regenerate the Public Key in
      EmailJS and update `src/siteConfig.ts`. The Personal plan ($9/mo) adds the
      whitelist if it becomes a recurring problem.

- [ ] **Submit the sitemap** in Search Console → Sitemaps → `sitemap.xml`.

---

## Worth doing when there's time

- **Real project work on the Work page.** It currently shows the three solution
  types only. Genuine case studies are the biggest conversion gain available.
- **Published starting prices.** Almost nobody in this market does it; it was the
  original differentiator and there is still no pricing on the site.
- The amber "DNS Change Recommended" badge in Vercel is cosmetic — the legacy IP
  `76.76.21.21` is supported. Not worth another DNS edit.

---

## Editing notes

- Contact details live in `src/siteConfig.ts` — change them there, never per-file.
  The site once shipped two different email addresses and two phone numbers.
- The EmailJS template must keep referencing `fullName`, `email`, `company`,
  `projectType`, `message`, `time`. A renamed field renders an empty row rather
  than erroring. Body kept in `emailjs-template.html`.
- Above-the-fold sections use `intro` (fires on mount), below-fold use `fadeUp`
  (fires on scroll). Don't switch a hero to `fadeUp` — if IntersectionObserver
  doesn't fire, the section renders blank.
- Component classes live in `@layer components` so Tailwind utilities win. Adding
  unlayered CSS after the import reintroduces the bug where `.hidden` lost to
  `.btn-primary`.
