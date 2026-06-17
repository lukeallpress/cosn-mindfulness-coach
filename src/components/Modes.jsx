import { useState } from 'react'
import Section from './ui/Section.jsx'

const PANELS = {
  teacher: {
    label: 'For Teachers',
    items: [
      'Paste a lesson or activity',
      'Receive a digital mindfulness snapshot',
      'Get revision suggestions',
      'Add analog balance',
      'Create student-facing rationale',
    ],
  },
  leader: {
    label: 'For Leaders',
    items: [
      'Describe a policy challenge',
      'Review risks of blunt limits or bans',
      'Generate action steps',
      'Draft family or board language',
      'Plan professional learning supports',
    ],
  },
}

function PanelCard({ panel, accent }) {
  return (
    <div className="rounded-2xl border border-cosn-mist bg-white p-7 shadow-[0_12px_30px_-24px_rgba(6,43,73,0.5)]">
      <h3 className="text-lg font-bold text-cosn-navy">{panel.label}</h3>
      <ul className="mt-4 space-y-3">
        {panel.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-cosn-slate">
            <span className={`mt-1.5 grid h-4 w-4 shrink-0 place-items-center rounded-full ${accent}`}>
              <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Modes() {
  const [tab, setTab] = useState('teacher')

  return (
    <Section
      id="modes"
      eyebrow="Teacher + leader modes"
      title="Two ways in, one shared framework"
      intro="The coach adapts to who is asking — supporting classroom decisions and district-level policy work with the same research-informed lens."
    >
      {/* Mobile/tablet: tabbed view */}
      <div className="mt-12 lg:hidden">
        <div role="tablist" aria-label="Choose a mode" className="mx-auto flex max-w-xs rounded-xl bg-cosn-mist p-1">
          {Object.entries(PANELS).map(([key, panel]) => (
            <button
              key={key}
              role="tab"
              id={`tab-${key}`}
              aria-selected={tab === key}
              aria-controls={`panel-${key}`}
              onClick={() => setTab(key)}
              className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                tab === key ? 'bg-white text-cosn-blue shadow-sm' : 'text-cosn-gray'
              }`}
            >
              {panel.label}
            </button>
          ))}
        </div>
        <div className="mt-6" role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`}>
          <PanelCard panel={PANELS[tab]} accent={tab === 'teacher' ? 'bg-cosn-bright' : 'bg-cosn-blue'} />
        </div>
      </div>

      {/* Desktop: split panel, both visible */}
      <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-2">
        <PanelCard panel={PANELS.teacher} accent="bg-cosn-bright" />
        <PanelCard panel={PANELS.leader} accent="bg-cosn-blue" />
      </div>

      <p className="mx-auto mt-8 max-w-2xl rounded-xl bg-cosn-offwhite px-5 py-4 text-center text-sm leading-relaxed text-cosn-gray">
        Future versions could connect to CoSN resources, district policy documents,
        approved tool lists, and local implementation plans.
      </p>
    </Section>
  )
}
