/* Consistent section wrapper: anchor id, optional eyebrow/heading/intro, vertical rhythm. */
export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = 'light',
  className = '',
}) {
  const tones = {
    light: 'bg-white',
    mist: 'bg-cosn-offwhite',
    tint: 'bg-cosn-mist',
  }
  return (
    <section
      id={id}
      className={`scroll-mt-20 ${tones[tone] ?? tones.light} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-28">
        {(eyebrow || title || intro) && (
          <div className="mx-auto max-w-3xl text-center">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cosn-bright">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-balance text-3xl font-extrabold leading-tight text-cosn-navy sm:text-4xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 text-pretty text-lg leading-relaxed text-cosn-gray">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
