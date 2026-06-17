import Section from './ui/Section.jsx'
import Card from './ui/Card.jsx'

const CARDS = [
  {
    title: 'Local Knowledge',
    body: 'District goals, community concerns, board expectations, instructional priorities, and student needs.',
    icon: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V9l7-5 7 5v12" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
  },
  {
    title: 'CoSN Guidance',
    body: 'Responsible use, digital citizenship, student safety, accessibility, AI readiness, and balanced technology use.',
    icon: (
      <>
        <path d="M12 3l8 4v5c0 4.5-3.2 7.7-8 9-4.8-1.3-8-4.5-8-9V7l8-4Z" />
        <path d="M9.5 12l1.8 1.8L15 10" />
      </>
    ),
  },
  {
    title: 'Action Planning',
    body: 'Practical next steps for teachers, leaders, families, and policy teams.',
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
  },
]

export default function LocalContext() {
  return (
    <Section
      id="local-context"
      tone="mist"
      eyebrow="Built for local context"
      title="CoSN brings the framework. Your district brings the context."
      intro="No national tool can fully understand a district’s community, policies, staffing, student needs, technology ecosystem, or local pressures. This coach is designed to combine CoSN’s research-informed guidance with the expertise of local educators and leaders. The result is not a generic answer; it is a starting point for better local decisions."
    >
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {CARDS.map((c) => (
          <Card key={c.title}>
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-cosn-mist text-cosn-bright">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {c.icon}
              </svg>
            </span>
            <h3 className="mt-5 text-lg font-bold text-cosn-navy">{c.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-cosn-gray">{c.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
