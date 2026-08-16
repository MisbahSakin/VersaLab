# VersaLab

Marketing site for VersaLab. React 19 + React Router + Tailwind v4 + Vite, deployed as a static SPA.

## Run locally

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev      # http://localhost:3000
```

## Contact form

The contact form posts to [EmailJS](https://www.emailjs.com). There is **no environment
variable to set** — EmailJS's service ID, template ID and public key are client-side values
by design, so they live in `src/siteConfig.ts` and ship with the build.

Because they are public, the **domain whitelist is what protects the account**:
EmailJS dashboard → Account → Security → allow only your production domain.

The dashboard template must reference these variables: `fullName`, `email`, `company`,
`projectType`, `message`, `time`. A ready-to-paste template body lives in
`emailjs-template.html` — keep the two in sync, since a renamed field silently
renders an empty row rather than erroring.

If a send fails the form shows an error and points visitors at the contact email — it never
reports a false success, and it keeps whatever they typed.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Production build to `dist/` (plus `404.html` for static-host SPA routing) |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | `tsc --noEmit` typecheck |

## Deploy

Build and serve `dist/`. Routing uses `BrowserRouter`, so the host must fall back to
`index.html` for unknown paths — `dist/404.html` covers hosts that don't have an explicit
rewrite rule (GitHub Pages, most static CDNs).

Do not commit build output back into the source tree; `dist/` is gitignored.

## Structure

```
src/
  App.tsx           routes
  components/       Navbar, Footer
  pages/            Home, Services, Solutions, Process, Contact
  index.css         Tailwind entry + theme utilities
```
