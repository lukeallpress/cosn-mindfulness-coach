import Button from './ui/Button.jsx'

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-cosn-navy via-cosn-blue to-[#0a5e86] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute -right-20 -top-24 h-[140%] opacity-40" viewBox="0 0 400 400" fill="none">
          <ellipse cx="200" cy="200" rx="180" ry="120" stroke="#23c7d9" strokeOpacity="0.3" />
          <ellipse cx="200" cy="200" rx="120" ry="80" stroke="#a7f3d0" strokeOpacity="0.3" transform="rotate(-20 200 200)" />
          <rect x="60" y="120" width="12" height="12" rx="3" fill="#ff8a5b" fillOpacity="0.8" transform="rotate(12 66 126)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:px-8">
        <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
          Help shape what responsible, balanced technology support could look like.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-cosn-mist/90">
          This prototype is intended to start a conversation. With CoSN support, the Digital
          Mindfulness Coach could become a practical tool for districts navigating screen time
          pressure, policy revision, teacher support, AI readiness, and student digital citizenship.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="#coach" variant="coral">
            Start Prototype Review
          </Button>
          <Button href="#sample" variant="onDark">
            View Sample Action Plan
          </Button>
        </div>
        <p className="mt-6 text-sm text-cosn-mist/70">
          Buttons are stubbed in this prototype — no AI or account required.
        </p>
      </div>
    </section>
  )
}
