import Section from './ui/Section.jsx'

const USE_CASES = [
  {
    title: 'Review a Lesson',
    body: 'Evaluate whether technology use is purposeful, active, balanced, accessible, and safe.',
    icon: <><path d="M4 5h16v12H4z" /><path d="M2 21h20" /><path d="M8 9h8M8 13h5" /></>,
  },
  {
    title: 'Reduce Low-Value Screen Use',
    body: 'Identify passive or disconnected uses and suggest stronger instructional alternatives.',
    icon: <><path d="M5 12h14" /><path d="M12 5v14" opacity="0" /><circle cx="12" cy="12" r="9" /></>,
  },
  {
    title: 'Protect Analog Learning',
    body: 'Name where discussion, handwriting, books, manipulatives, labs, movement, or reflection may be the better mode.',
    icon: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
  },
  {
    title: 'Support Teachers',
    body: 'Provide practical revision suggestions without replacing teacher judgment.',
    icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6M22 11h-6" /></>,
  },
  {
    title: 'Guide Leaders',
    body: 'Help leaders respond to proposed screen time limits or bans with balanced, actionable alternatives.',
    icon: <><path d="M3 21h18" /><path d="M12 3l9 5-9 5-9-5 9-5Z" /><path d="M7 11v5c0 1 2 2.5 5 2.5S17 17 17 16v-5" /></>,
  },
  {
    title: 'Communicate with Families',
    body: 'Create clear language that explains how technology supports learning without dismissing parent concerns.',
    icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></>,
  },
]

export default function UseCases() {
  return (
    <Section
      id="use-cases"
      eyebrow="Use cases"
      title="Designed for the decisions schools are actually facing"
    >
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {USE_CASES.map((u) => (
          <div
            key={u.title}
            className="group rounded-2xl border border-cosn-mist bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-cosn-bright/40 hover:shadow-[0_18px_40px_-24px_rgba(6,43,73,0.5)]"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cosn-blue to-cosn-teal text-white">
                <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {u.icon}
                </svg>
              </span>
              <h3 className="pt-1.5 text-lg font-bold text-cosn-navy">{u.title}</h3>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-cosn-gray">{u.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
