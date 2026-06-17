export default function Footer() {
  return (
    <footer className="border-t border-cosn-mist bg-cosn-offwhite">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cosn-blue to-cosn-teal">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <g fill="none" stroke="#ffffff" strokeWidth="1.7">
                    <circle cx="6" cy="12" r="2.2" fill="#ffffff" stroke="none" />
                    <circle cx="17" cy="6" r="2.2" />
                    <circle cx="17" cy="18" r="2.2" />
                    <path d="M8 11 15 7M8 13l7 4" />
                  </g>
                </svg>
              </span>
              <span className="text-base font-extrabold text-cosn-navy">
                CoSN Digital Mindfulness Coach
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cosn-gray">
              A prototype shell for discussion purposes — built around responsible, balanced,
              student-centered technology use. CoSN brings the framework. Your district brings
              the context.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cosn-gray">Partners</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {/* Optional placeholder for partner logos */}
              {['Your District', 'CoSN', 'Partner'].map((p) => (
                <div
                  key={p}
                  className="grid h-12 w-28 place-items-center rounded-lg border border-dashed border-cosn-gray/30 bg-white text-xs font-medium text-cosn-gray/70"
                >
                  {p} logo
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-cosn-mist bg-white px-5 py-4">
          <p className="text-xs leading-relaxed text-cosn-gray">
            <span className="font-semibold text-cosn-slate">API not connected in this prototype.</span>{' '}
            Future implementation would require CoSN-approved governance, privacy review, and
            funded development.
          </p>
        </div>

        <p className="mt-8 text-xs text-cosn-gray/80">
          © {2026} Prototype concept · Not an official CoSN product. “CoSN” is referenced for
          design and positioning context only.
        </p>
      </div>
    </footer>
  )
}
