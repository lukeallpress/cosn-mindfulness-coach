import Button from './ui/Button.jsx'
import MockToolPanel from './MockToolPanel.jsx'
import { WORKING_GPT_URL, POLICY_GUIDANCE_URL } from '../data/links.js'

/* Small outbound-link arrow. */
function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

/*
  Decorative background motif: orbit lines, curved arcs, connected nodes, and small
  geometric accent squares — inspired by CoSN's "Setting Conditions for Success".
  Purely decorative, so it's aria-hidden.
*/
function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 1200 760"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* orbit ellipses */}
        <g stroke="#23c7d9" strokeOpacity="0.22" strokeWidth="1.2">
          <ellipse cx="840" cy="300" rx="430" ry="240" />
          <ellipse cx="840" cy="300" rx="300" ry="150" transform="rotate(-18 840 300)" />
          <ellipse cx="300" cy="560" rx="360" ry="200" strokeOpacity="0.14" />
        </g>
        {/* sweeping arcs */}
        <path d="M-40 540 C 320 380, 700 620, 1240 360" stroke="#a7f3d0" strokeOpacity="0.25" strokeWidth="1.5" />
        <path d="M-40 200 C 360 120, 720 340, 1240 120" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="1.2" />
        {/* connected nodes */}
        <g>
          <circle cx="610" cy="180" r="4" fill="#23c7d9" fillOpacity="0.9" />
          <circle cx="1010" cy="150" r="5" fill="#a7f3d0" fillOpacity="0.9" />
          <circle cx="1120" cy="470" r="4" fill="#23c7d9" fillOpacity="0.8" />
          <circle cx="470" cy="470" r="3.5" fill="#ffffff" fillOpacity="0.7" />
          <path d="M610 180 L1010 150 M1010 150 L1120 470" stroke="#a7f3d0" strokeOpacity="0.3" strokeWidth="1" />
        </g>
        {/* small geometric accent squares (one coral, used sparingly) */}
        <g>
          <rect x="190" y="150" width="14" height="14" rx="3" fill="#ff8a5b" fillOpacity="0.85" transform="rotate(12 197 157)" />
          <rect x="1040" y="560" width="11" height="11" rx="2.5" fill="#23c7d9" fillOpacity="0.7" transform="rotate(-10 1045 565)" />
          <rect x="700" y="610" width="9" height="9" rx="2" fill="#ffffff" fillOpacity="0.5" />
        </g>
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-cosn-navy via-cosn-blue to-[#0a5e86] text-white"
    >
      <HeroBackdrop />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-28 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pb-28 lg:pt-36">
        {/* Left: pitch */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-cosn-mint ring-1 ring-inset ring-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-cosn-mint" />
            A CoSN leadership resource — prototype
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Help you move from screen time debate to intentional technology use.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-cosn-mist/90">
            The CoSN Screentime Mindfulness Coach pairs your local context with CoSN
            research and resources to help you evaluate a specific lesson, policy question,
            or screen time concern — protect essential analog learning, and leave with a
            practical, tailored action plan for the decision in front of you.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#coach" variant="coral">
              Preview the Coach
            </Button>
            <Button href="#framework" variant="onDark">
              Explore the Framework
            </Button>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a
              href={WORKING_GPT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-cosn-mint hover:text-white"
            >
              <ExternalIcon />
              Try the working GPT version
            </a>
            <a
              href={POLICY_GUIDANCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-cosn-mist/80 hover:text-white"
            >
              <ExternalIcon />
              CoSN Screen Time Policy Guidance
            </a>
          </div>

          <p className="mt-5 flex items-start gap-2 text-sm text-cosn-mist/70">
            <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="4" y="11" width="16" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            Prototype shell — this polished interface is a concept; the GPT link above is the
            rough but working version.
          </p>
        </div>

        {/* Right: interactive product preview */}
        <div className="lg:pl-4">
          <MockToolPanel />
        </div>
      </div>
    </section>
  )
}
