import { useState } from 'react'
import StatusPill from './ui/StatusPill.jsx'
import { DEFAULT_INPUT, MODES, MOCK_RESPONSES } from '../data/mockResponse.js'

/*
  Screentime Mindfulness Review — the interactive product preview.

  IMPORTANT: This panel does NOT call any AI model or backend. It looks up a canned
  response from src/data/mockResponse.js based on the selected mode and renders it
  after a short simulated "Analyzing…" delay so the experience feels real. This is a
  prototype shell only.
*/
export default function MockToolPanel() {
  const [input, setInput] = useState(DEFAULT_INPUT)
  const [mode, setMode] = useState(MODES[0].value)
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'done'
  const [result, setResult] = useState(null)
  const [copied, setCopied] = useState(false)

  function handleGenerate() {
    setStatus('loading')
    setCopied(false)

    // FUTURE API INTEGRATION:
    // Send user input, selected mode, and district context to CoSN-approved AI backend.
    // Backend should retrieve relevant CoSN resources, apply the Screentime Mindfulness framework,
    // and return structured feedback. This is intentionally stubbed for the prototype.
    //
    // Example shape of the eventual call (NOT implemented here):
    //   const res = await fetch('/api/coach', {
    //     method: 'POST',
    //     body: JSON.stringify({ input, mode, districtContext }),
    //   })
    //   setResult(await res.json())

    // --- Stubbed mock behaviour: pick the canned response for the selected mode. ---
    const mock = MOCK_RESPONSES[mode] ?? MOCK_RESPONSES[MODES[0].value]
    window.setTimeout(() => {
      setResult(mock)
      setStatus('done')
    }, 850)
  }

  function handleCopy() {
    if (!result) return
    const lines = [
      'CoSN Screentime Mindfulness Coach — Mock Feedback (prototype)',
      `Mode: ${MODES.find((m) => m.value === mode)?.label ?? mode}`,
      '',
      ...result.rows.map((r) => `• ${r.label}: ${r.value}`),
      '',
      `Summary: ${result.summary}`,
      `Suggested next step: ${result.suggestedNextStep}`,
      '',
      `Suggested revision: ${result.suggestedRevision}`,
    ]
    navigator.clipboard?.writeText(lines.join('\n')).then(
      () => {
        setCopied(true)
        window.setTimeout(() => setCopied(false), 2000)
      },
      () => {},
    )
  }

  return (
    <div
      id="coach"
      className="rounded-3xl border border-white/15 bg-white p-2 shadow-[0_30px_60px_-25px_rgba(2,18,36,0.7)] ring-1 ring-black/5 scroll-mt-24"
    >
      <div className="rounded-[1.35rem] bg-white">
        {/* Card header */}
        <div className="flex items-center justify-between gap-3 border-b border-cosn-mist px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cosn-blue to-cosn-teal text-white">
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3a4 4 0 0 1 4 4c1.5.7 2.5 2.2 2.5 4 0 .8-.2 1.5-.6 2.2.4.6.6 1.3.6 2.1A4 4 0 0 1 12 21a4 4 0 0 1-6.5-3.4c0-.8.2-1.5.6-2.1A4.4 4.4 0 0 1 5.5 11C5.5 9.2 6.5 7.7 8 7a4 4 0 0 1 4-4Z" />
                <path d="M12 3v18" />
              </svg>
            </span>
            <div>
              <h2 className="text-sm font-bold text-cosn-navy">Screentime Mindfulness Review</h2>
              <p className="text-xs text-cosn-gray">Demo · no AI connected</p>
            </div>
          </div>
          <span className="rounded-full bg-cosn-mist px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cosn-bright">
            Preview
          </span>
        </div>

        {/* Card body */}
        <div className="px-6 py-5 text-cosn-slate">
          <label htmlFor="coach-input" className="block text-sm font-semibold text-cosn-navy">
            Lesson, policy question, or screen time concern
          </label>
          <textarea
            id="coach-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            placeholder="Paste a lesson, policy question, or screen time concern…"
            className="mt-2 w-full resize-y rounded-xl border border-cosn-mist bg-cosn-offwhite px-3.5 py-3 text-sm leading-relaxed text-cosn-slate placeholder:text-cosn-gray/70 focus:border-cosn-bright focus:bg-white focus:outline-none focus:ring-2 focus:ring-cosn-bright/30"
          />

          <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <label htmlFor="coach-mode" className="block text-sm font-semibold text-cosn-navy">
                Review mode
              </label>
              <select
                id="coach-mode"
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                className="mt-2 w-full rounded-xl border border-cosn-mist bg-white px-3.5 py-2.5 text-sm font-medium text-cosn-slate focus:border-cosn-bright focus:outline-none focus:ring-2 focus:ring-cosn-bright/30"
              >
                {MODES.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              onClick={handleGenerate}
              disabled={status === 'loading' || input.trim().length === 0}
              className="inline-flex h-[42px] items-center justify-center gap-2 rounded-xl bg-cosn-bright px-5 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(0,119,182,0.7)] transition-colors hover:bg-cosn-blue disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <Spinner /> Analyzing…
                </>
              ) : (
                'Generate CoSN-Aligned Feedback'
              )}
            </button>
          </div>

          {/* Output */}
          <div aria-live="polite">
            {status === 'idle' && (
              <p className="mt-5 rounded-xl bg-cosn-offwhite px-4 py-3 text-xs leading-relaxed text-cosn-gray">
                This preview returns illustrative sample feedback to show the intended
                experience. A funded build would connect CoSN-approved AI and resources.
              </p>
            )}

            {status === 'done' && result && (
              <div className="mt-5 rounded-2xl border border-cosn-mist bg-cosn-offwhite p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-cosn-navy">Coach feedback (sample)</h3>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-cosn-bright hover:bg-cosn-mist"
                  >
                    {copied ? (
                      <>
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></svg>
                        Copy output
                      </>
                    )}
                  </button>
                </div>

                <dl className="mt-3 space-y-2">
                  {result.rows.map((row) => (
                    <div key={row.label} className="flex flex-wrap items-center justify-between gap-2">
                      <dt className="text-sm font-medium text-cosn-slate">{row.label}</dt>
                      <dd>
                        <StatusPill level={row.level}>{row.value}</StatusPill>
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-4 border-t border-cosn-mist pt-3">
                  <p className="text-sm leading-relaxed text-cosn-slate">{result.summary}</p>
                  <p className="mt-3 text-sm leading-relaxed text-cosn-slate">
                    <span className="font-semibold text-cosn-navy">Suggested next step: </span>
                    {result.suggestedNextStep}
                  </p>
                  <div className="mt-3 rounded-xl border border-cosn-mint/70 bg-cosn-mint/20 px-3.5 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-cosn-blue">Suggested revision</p>
                    <p className="mt-1 text-sm leading-relaxed text-cosn-slate">{result.suggestedRevision}</p>
                  </div>
                </div>

                <p className="mt-3 text-[11px] leading-relaxed text-cosn-gray">
                  Sample output — illustrative only. Not generated by an AI model.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
    </svg>
  )
}
