import Section from './ui/Section.jsx'

const FEEDBACK = [
  'Purpose is present but could be more explicit.',
  'Learning value is mostly passive.',
  'Add pauses for discussion, sketching, or partner explanation.',
  'Use the form as a brief check for understanding, not the core learning experience.',
]

export default function SampleOutput() {
  return (
    <Section
      id="sample"
      eyebrow="See it in action"
      title="Example: from basic screen use to mindful learning design"
    >
      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
        {/* Before */}
        <div className="rounded-2xl border border-cosn-mist bg-cosn-offwhite p-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-cosn-gray">Original activity</p>
          <p className="mt-4 text-lg leading-relaxed text-cosn-slate">
            “Students watch a 35-minute video and answer 10 multiple-choice questions.”
          </p>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center" aria-hidden="true">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-cosn-blue text-white lg:rotate-0">
            <svg viewBox="0 0 24 24" className="h-5 w-5 rotate-90 lg:rotate-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </span>
        </div>

        {/* After */}
        <div className="rounded-2xl border border-cosn-bright/30 bg-white p-7 shadow-[0_16px_40px_-26px_rgba(6,43,73,0.6)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-cosn-bright">Coach feedback</p>
          <ul className="mt-4 space-y-2.5">
            {FEEDBACK.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-cosn-slate">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-cosn-teal" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-cosn-mist bg-cosn-offwhite p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-cosn-gray">Add a student reflection</p>
          <p className="mt-2 text-[15px] italic leading-relaxed text-cosn-slate">
            “How did the video help your learning, and when did discussion or drawing help more?”
          </p>
        </div>
        <div className="rounded-2xl border border-cosn-mint/70 bg-cosn-mint/20 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-cosn-blue">Suggested revision</p>
          <p className="mt-2 text-[15px] leading-relaxed text-cosn-slate">
            “Students watch two short video segments, pause to sketch a concept model, discuss
            with a partner, and complete a brief exit ticket explaining their thinking.”
          </p>
        </div>
      </div>
    </Section>
  )
}
