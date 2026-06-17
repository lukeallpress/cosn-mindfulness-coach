/* Reusable elevated card with calm border + soft shadow. */
export default function Card({ children, className = '', as: Tag = 'div' }) {
  return (
    <Tag
      className={`rounded-2xl border border-cosn-mist bg-white p-7 shadow-[0_1px_3px_rgba(6,43,73,0.06),0_12px_28px_-18px_rgba(6,43,73,0.35)] ${className}`}
    >
      {children}
    </Tag>
  )
}
