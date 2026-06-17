import { useEffect, useState } from 'react'
import Button from './ui/Button.jsx'

const LINKS = [
  { href: '#local-context', label: 'Local Context' },
  { href: '#use-cases', label: 'What It Helps With' },
  { href: '#framework', label: 'Framework' },
  { href: '#modes', label: 'Teacher & Leader' },
  { href: '#roadmap', label: 'Roadmap' },
]

/* CoSN-style wordmark: connected-node motif in a rounded square. */
function Wordmark({ scrolled }) {
  return (
    <a
      href="#top"
      className={`flex items-center gap-2.5 font-extrabold ${scrolled ? 'text-cosn-navy' : 'text-white'}`}
      aria-label="CoSN Digital Mindfulness Coach — back to top"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cosn-blue to-cosn-teal ring-1 ring-white/30">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <g fill="none" stroke="#ffffff" strokeWidth="1.7">
            <circle cx="6" cy="12" r="2.2" fill="#ffffff" stroke="none" />
            <circle cx="17" cy="6" r="2.2" />
            <circle cx="17" cy="18" r="2.2" />
            <path d="M8 11 15 7M8 13l7 4" />
          </g>
        </svg>
      </span>
      <span className="text-[15px] leading-tight sm:text-base">
        CoSN{' '}
        <span className={scrolled ? 'text-cosn-bright' : 'text-cosn-mint'}>
          Digital Mindfulness Coach
        </span>
      </span>
    </a>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Over the dark hero (not scrolled) the bar is transparent → light text.
  // Once scrolled onto the white page → solid bar, dark text.
  const linkColor = scrolled
    ? 'text-cosn-slate hover:text-cosn-bright'
    : 'text-white/85 hover:text-white'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'border-b border-cosn-mist bg-white/90 backdrop-blur'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 sm:px-8"
        aria-label="Primary"
      >
        <Wordmark scrolled={scrolled} />

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${linkColor}`}
            >
              {l.label}
            </a>
          ))}
          <Button
            href="#coach"
            variant={scrolled ? 'primary' : 'onDark'}
            className="px-5 py-2 text-sm"
          >
            Preview the Coach
          </Button>
        </div>

        <button
          type="button"
          className={`rounded-lg p-2 lg:hidden ${scrolled ? 'text-cosn-navy' : 'text-white'}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-cosn-mist bg-white lg:hidden">
          <div className="space-y-1 px-6 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-cosn-slate hover:bg-cosn-mist"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button
              href="#coach"
              variant="primary"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Preview the Coach
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
