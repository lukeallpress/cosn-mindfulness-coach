import Section from './ui/Section.jsx'

const PHASES = [
  {
    phase: 'Phase 1',
    title: 'Concept Shell',
    body: 'Landing page, interface mockup, sample outputs, stakeholder feedback.',
    state: 'current',
  },
  {
    phase: 'Phase 2',
    title: 'Guided GPT Prototype',
    body: 'Test the quality of CoSN-aligned feedback using curated source materials.',
    state: 'next',
  },
  {
    phase: 'Phase 3',
    title: 'Funded Agentic Tool',
    body: 'Connect secure AI workflows, district context uploads, resource retrieval, and exportable action plans.',
    state: 'future',
  },
  {
    phase: 'Phase 4',
    title: 'CoSN Member Resource',
    body: 'Offer districts a practical tool for policy response, professional learning, and instructional planning.',
    state: 'future',
  },
]

const STATE_BADGE = {
  current: { label: 'You are here', cls: 'bg-cosn-coral/15 text-[#b4421f] ring-cosn-coral/40' },
  next: { label: 'Next', cls: 'bg-cosn-mint/40 text-cosn-blue ring-cosn-mint' },
  future: { label: 'Future', cls: 'bg-cosn-mist text-cosn-gray ring-cosn-gray/20' },
}

export default function Roadmap() {
  return (
    <Section
      id="roadmap"
      tone="mist"
      eyebrow="Prototype today, platform tomorrow"
      title="A lightweight prototype now. A scalable CoSN tool later."
      intro="This page is a front-end concept shell. The AI/API layer is intentionally left blank for this prototype. The next step would be to connect the interface to a CoSN-approved AI workflow that draws from CoSN resources, district-provided context, and clear privacy and governance expectations."
    >
      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {PHASES.map((p) => {
          const badge = STATE_BADGE[p.state]
          return (
            <li
              key={p.phase}
              className={`relative rounded-2xl border bg-white p-7 ${
                p.state === 'current' ? 'border-cosn-coral/40 shadow-[0_16px_36px_-22px_rgba(255,138,91,0.6)]' : 'border-cosn-mist'
              }`}
            >
              <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ring-1 ring-inset ${badge.cls}`}>
                {badge.label}
              </span>
              <p className="mt-4 text-sm font-semibold text-cosn-bright">{p.phase}</p>
              <h3 className="mt-1 text-lg font-bold text-cosn-navy">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-cosn-gray">{p.body}</p>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
