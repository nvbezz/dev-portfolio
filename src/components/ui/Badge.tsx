type BadgeProps = {
  children: React.ReactNode
  className?: string
}

export const Badge = ({ children, className = "" }: BadgeProps) => (
  <span
    className={`inline-block rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-muted ${className}`}
  >
    {children}
  </span>
)
