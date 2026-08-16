# VersaLab — Go-live checklist

Status as of the pre-launch audit. `[x]` = verified by me, `[ ]` = needs you.

---

## 🔴 Blockers — the site should not go live until these are done

- [x] **EmailJS IDs are wired in** (`src/siteConfig.ts`): service `service_e1wzwef`,
      template `template_iettqfh`, public key `BWCpNwD73e_B96PSs`.
      There is no environment variable to configure at deploy time.

- [x] **The contact form sends.** Verified by filling and submitting the real form in
      a browser: EmailJS returned `200 OK` and the success panel rendered, with no
      error fallback. Also verified: an empty submit is blocked with 4 field errors,
      and a failed send shows "couldn't send — email us at contact@versalab.org" with
      a working mailto, no false success, and the typed message preserved.
      `projectType` sends the readable label ("Web development"), not the raw value.

- [ ] **Check contact@versalab.org for the test email.** The `200` means EmailJS
      accepted and queued the message — it does not by itself prove your SMTP relay
      (mail.versalab.org:465) delivered it to the inbox. Confirm it arrived and that
      every row is populated; a blank row means a template variable name is wrong.
      Subject will be "New Web development inquiry from Pre-launch test (Claude Code)".

- [ ] **Turn on the EmailJS domain whitelist.** Account → Security → allow only
      `versalab.org`. **Not yet active** — my test submitted successfully from
      `localhost:4173`, which proves nothing is restricting origins right now. Your
      public key ships in the JavaScript where anyone can read it, and unlike
      Web3Forms there is no server-side honeypot as a backstop, so this whitelist is
      the only thing protecting the account from being used to send spam.

- [ ] **Register `versalab.org` and point DNS at the host.** The domain is baked into
      `sitemap.xml`, `robots.txt`, the canonical tag, and the og/Twitter tags. If the
      real domain differs, change it in `src/siteConfig.ts`, `index.html`, and
      `public/{robots.txt,sitemap.xml}`.

- [ ] **Serve over HTTPS** and confirm `http://` redirects to `https://`.

- [ ] **Configure the SPA rewrite.** All routes must fall back to `index.html`, or
      direct links to `/services` 404. `npm run build` emits `dist/404.html`, which
      covers GitHub Pages and most static CDNs. On Netlify add `/* /index.html 200`;
      on Vercel a catch-all rewrite; on Nginx `try_files $uri /index.html`.

- [ ] **Send one real test submission** through the live form and confirm the email
      arrives. Then break the key deliberately and confirm the error state appears.
      This is the only check that proves the site does its job.

---

## ✅ Fixed during this audit

- [x] **Two different contact emails were live** — `hello@versalab.com` in the footer
      and CTA, `contact@versalab.io` on Contact and Privacy. Different domains.
      Now `contact@versalab.org` everywhere, from `src/siteConfig.ts`.
- [x] **Two different phone numbers were live** — the footer carried
      `+880 1234 567890`, placeholder digits copied from the reference design.
      Now `+880 1733 771266` everywhere, from the same config.
- [x] **`public/` was inside `src/`** (my error, from a stale `cd`). Project images at
      `/work/*.png` would have 404'd. Moved to the project root.
- [x] **Above-the-fold content could render blank.** Hero sections used `whileInView`,
      so if IntersectionObserver was slow or blocked they stayed at `opacity: 0`.
      Caught by screenshotting the built site — the hero was invisible. Split into
      `intro` (fires on mount, used above the fold) and `fadeUp` (scroll, below).
- [x] **CSS layer bug.** `.btn-primary` set `display:inline-flex` and, being unlayered
      and defined after Tailwind's import, beat `.hidden` — so "Let's Talk" showed
      next to the hamburger on mobile. All component classes are now in
      `@layer components`, which also removed the `!important` prefixes I'd been
      using to work around it.
- [x] **Invalid sitemap namespace** — `sitemap.org` instead of `sitemaps.org`.
- [x] **Stale meta description** in `index.html` still described the previous
      positioning ("published pricing, two-week checkpoints").
- [x] **`og:image` pointed at a file that did not exist** → blank social previews.
      A real 1200×630 PNG is now generated and committed at `public/og-image.png`.
- [x] **Fabricated case studies removed** (Aurora, EduFlow, Nimbus, Moda, Pulse) along
      with the "+24" avatars and the "Trusted by" logo strip, per your decision.
- [x] `robots.txt` and `sitemap.xml` created (7 URLs, valid XML).
- [x] Canonical URL, `theme-color`, and JSON-LD `ProfessionalService` added.
- [x] Favicon replaced with the violet brand mark and moved to `public/` so it is
      served unhashed at `/favicon.svg`.
- [x] Every internal link target resolves to a real route — no `#`, no dead paths.
- [x] Exactly one `<h1>` per page; unique `<title>` and description on all 8 routes.
- [x] Zero horizontal overflow at 390 / 768 / 1440 px (measured, not eyeballed).
- [x] Mobile nav shows the hamburger and hides the desktop CTA.
- [x] `tsc --noEmit` clean; production build clean.

---

## ⚠️ Decisions for you

- [ ] **Analytics contradicts the privacy policy.** `/privacy` states plainly: "We don't
      run analytics, advertising trackers, or third-party cookies on this site." If you
      add Google Analytics or similar, that sentence becomes false and you'll need a
      cookie banner in most jurisdictions. Privacy-friendly options that keep the
      statement roughly honest: Plausible or Fathom (no cookies, no personal data) —
      still update the wording. My recommendation: launch without analytics, add later
      with the policy updated in the same change.

- [ ] **Social previews are site-wide, not per-page.** This is a client-rendered SPA.
      Google renders JS so per-page titles are fine for search, but WhatsApp, LinkedIn
      and Slack do **not** run JS — every shared URL shows the homepage og tags.
      Acceptable for launch. If per-page previews matter later, that needs prerendering
      (`vite-plugin-ssg` or similar), which is a real change, not a config tweak.

- [ ] **Bundle is 421 KB / 132 KB gzipped.** Fine for a marketing site on decent
      connections; on slow mobile it's noticeable. The bulk is `motion`. Route-level
      code splitting would help if you care — not worth doing pre-launch.

- [ ] **Placeholder content still on the site:** the Academic Companion dashboard shows
      a fictional student ("Good morning, Anika"), which reads as an illustration rather
      than a claim, so I left it. Confirm you're happy with that.

---

## Visual review (completed)

Every page screenshotted at 390 px and 1440 px via Chrome DevTools Protocol with real
device emulation, scrolling at human speed so scroll-triggered sections reveal.

| Page | 390 px | 1440 px | Overflow | Hidden elements |
| --- | --- | --- | --- | --- |
| Home | ok | ok | 0 | 0 |
| Work | ok | ok | 0 | 0 |
| Services | ok | ok | 0 | 0 |
| Process | ok | ok | 0 | 0 |
| About | ok | ok | 0 | 0 |
| Let's Talk | ok | ok | 0 | 0 |
| Privacy | ok | ok | 0 | 0 |

Fixed during the visual review:

- **The dark CTA band above the footer rendered empty on every page.** "Have an idea
  worth building?" and both buttons were missing. It sits on all seven pages, so this
  was a site-wide blank section. Switched to mount-triggered animation.
- **Process timeline labels were 8 px** — too small to read. Raising the size made
  "DEPLOYMENT" and "CONTINUOUS" collide, so the labels are now short words
  (Discover / Build / Test / Deploy / Evolve) at a legible 10 px.
- **Footer text at `white/40` failed WCAG AA** (3.60, needs 4.5). Now `white/60` at 7.21.
  Every other colour pair on the site already passed.
- **About heading orphaned "to." on its own line** — the measure constraint was on the
  wrapper instead of the paragraph.

One scare that turned out to be my measurement, not a bug: several sections looked
blank when I first captured them. At human scroll speed all of them reveal correctly
(0 hidden). My capture script was scrolling at 60 ms per step, faster than
IntersectionObserver could fire. Scroll animations are fine and were left alone.

---

## Post-launch, first day

- [ ] Submit `https://versalab.org/sitemap.xml` in Google Search Console.
- [ ] Paste the live URL into WhatsApp or LinkedIn and confirm the preview card renders.
- [ ] Run Lighthouse on the live URL (performance, a11y, SEO, best practices).
- [ ] Open DevTools console on the live site and confirm it's clean.
- [ ] Test the form once more from a phone on mobile data, not office wifi.
