# CoSN Screentime Mindfulness Coach — Prototype Shell

A polished, front-end-only landing page that pitches a future **CoSN Screentime Mindfulness
Coach**: a planning assistant that pairs CoSN research and frameworks with a district's
local context to help schools move *from screen time debate to intentional technology use*.

> **This prototype does not connect to an AI model or external API.** It is intended to
> demonstrate the user experience, visual direction, and possible interaction model for a
> future CoSN-funded Screentime Mindfulness Coach. A production version would require approved
> AI infrastructure, source retrieval, privacy review, authentication decisions, governance
> policies, and CoSN-approved content curation.

Built with **React + Vite + Tailwind CSS v4**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

## How it works (and what's intentionally not built)

- **No backend, no auth, no database, no AI/API.** Everything runs in the browser.
- The interactive **"Screentime Mindfulness Review"** card (the product preview in the hero)
  takes a lesson/policy/concern, a review mode, and — on **Generate CoSN-Aligned Feedback**
  — renders a **canned sample response** after a short simulated delay. There is no network
  request anywhere.

### Where the mock response lives

[`src/data/mockResponse.js`](src/data/mockResponse.js) — the default textarea text, the
list of review modes, and one mock feedback object per mode. Edit these to change the demo
output.

### Where future API integration goes

[`src/components/MockToolPanel.jsx`](src/components/MockToolPanel.jsx), inside
`handleGenerate()`. The integration point is marked with:

```javascript
// FUTURE API INTEGRATION:
// Send user input, selected mode, and district context to CoSN-approved AI backend.
// Backend should retrieve relevant CoSN resources, apply the Screentime Mindfulness framework,
// and return structured feedback. This is intentionally stubbed for the prototype.
```

A funded build would replace the canned lookup with a call to a CoSN-approved AI workflow
that returns the same structured shape (`rows`, `summary`, `suggestedNextStep`,
`suggestedRevision`).

## Project structure

```
src/
  App.jsx                 # assembles nav + sections + footer
  index.css               # Tailwind import + CoSN design tokens (@theme)
  data/mockResponse.js    # mock feedback + default input (the only "data")
  components/
    Nav.jsx  Hero.jsx  MockToolPanel.jsx  LocalContext.jsx  UseCases.jsx
    Framework.jsx  Modes.jsx  Roadmap.jsx  SampleOutput.jsx  CTA.jsx  Footer.jsx
    ui/  Section.jsx  Card.jsx  Button.jsx  StatusPill.jsx
```

## Design

Palette and visual language are grounded in CoSN's "Setting Conditions for Success" look —
a deep-blue foundation, teal/cyan gradients, generous white space, bold typography, subtle
orbit/node motifs, and a sparing warm-coral accent. Tokens are defined once in
[`src/index.css`](src/index.css) (`@theme`) and reused as Tailwind utilities
(`bg-cosn-blue`, `text-cosn-slate`, …).

Accessibility: semantic landmarks, labeled controls, visible keyboard focus, status conveyed
by icon **and** text (not color alone), AA-minded contrast, and a responsive layout.

## Deployment

Hosted free on **GitHub Pages** via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). Every push to `main`
builds the site and publishes `dist/`. The production `base` path is set to the repo name in
[`vite.config.js`](vite.config.js); update it if you rename or fork the repo.

---

*Prototype concept for discussion purposes. Not an official CoSN product; "CoSN" is
referenced for design and positioning context only.*
