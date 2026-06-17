import Section from './ui/Section.jsx'

const STEPS = [
  {
    n: '01',
    title: 'Purpose',
    body: 'What learning goal does this support?',
    icon: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.5" fill="currentColor" /></>,
  },
  {
    n: '02',
    title: 'Learning Value',
    body: 'Are students consuming, practicing, creating, collaborating, receiving support, or preparing for future work?',
    icon: <><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></>,
  },
  {
    n: '03',
    title: 'Safety',
    body: 'Is the tool approved, accessible, secure, age-appropriate, and privacy-conscious?',
    icon: <><path d="M12 3l8 4v5c0 4.5-3.2 7.7-8 9-4.8-1.3-8-4.5-8-9V7l8-4Z" /></>,
  },
  {
    n: '04',
    title: 'Reflection',
    body: 'Did the technology deepen learning, or would another mode have worked better?',
    icon: <><path d="M21 12a9 9 0 1 1-3.5-7.1" /><path d="M21 4v5h-5" /></>,
  },
]

export default function Framework() {
  return (
    <Section
      id="framework"
      tone="tint"
      eyebrow="The framework"
      title="A simple framework for mindful technology decisions"
    >
      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s) => (
          <li
            key={s.n}
            className="relative rounded-2xl border border-white bg-white p-7 shadow-[0_12px_30px_-22px_rgba(6,43,73,0.5)]"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-cosn-blue text-white">
                <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {s.icon}
                </svg>
              </span>
              <span className="text-2xl font-extrabold text-cosn-mist">{s.n}</span>
            </div>
            <h3 className="mt-5 text-lg font-bold text-cosn-navy">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-cosn-gray">{s.body}</p>
          </li>
        ))}
      </ol>

      <p className="mx-auto mt-12 max-w-2xl text-balance text-center text-xl font-semibold text-cosn-navy">
        The goal is not more technology or less technology.{' '}
        <span className="text-cosn-bright">The goal is better decisions.</span>
      </p>
    </Section>
  )
}
