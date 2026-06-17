/*
  StatusPill — shows a labeled status. Tone is communicated by BOTH an icon shape
  and the text label, never color alone (accessibility requirement). Color is a
  secondary, reinforcing cue.

  level: 'good' | 'moderate' | 'attention' | 'verify'
*/

const ICONS = {
  // check
  good: 'M5 13l4 4L19 7',
  // upward trend / developing
  moderate: 'M3 17l6-6 4 4 8-8',
  // alert triangle path is drawn separately below
  attention: null,
  // magnifier / verify locally
  verify: 'M21 21l-4.3-4.3M11 19a8 8 0 100-16 8 8 0 000 16z',
}

const STYLES = {
  good: 'bg-cosn-mint/40 text-cosn-blue ring-cosn-mint',
  moderate: 'bg-cosn-mist text-cosn-bright ring-cosn-bright/30',
  attention: 'bg-cosn-coral/15 text-[#b4421f] ring-cosn-coral/40',
  verify: 'bg-cosn-offwhite text-cosn-gray ring-cosn-gray/30',
}

function Icon({ level }) {
  if (level === 'attention') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    )
  }
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={ICONS[level] ?? ICONS.verify} />
    </svg>
  )
}

export default function StatusPill({ level = 'verify', children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold ring-1 ring-inset ${STYLES[level] ?? STYLES.verify}`}
    >
      <Icon level={level} />
      {children}
    </span>
  )
}
