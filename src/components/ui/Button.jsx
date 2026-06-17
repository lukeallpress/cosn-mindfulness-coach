/*
  Primary / secondary / ghost button. Renders as <a> when `href` is supplied
  (used for smooth-scroll anchor CTAs), otherwise a real <button>.
*/
export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60'

  const variants = {
    primary:
      'bg-cosn-bright text-white hover:bg-cosn-blue shadow-[0_8px_20px_-8px_rgba(0,119,182,0.7)]',
    secondary:
      'bg-white text-cosn-blue ring-1 ring-inset ring-cosn-bright/30 hover:bg-cosn-mist',
    onDark:
      'bg-white/10 text-white ring-1 ring-inset ring-white/40 backdrop-blur hover:bg-white/20',
    coral:
      'bg-cosn-coral text-cosn-navy hover:brightness-95 shadow-[0_8px_20px_-8px_rgba(255,138,91,0.8)]',
  }

  const cls = `${base} ${variants[variant] ?? variants.primary} ${className}`

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
