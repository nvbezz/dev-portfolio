import Link from "next/link"

type ButtonProps = {
  variant?: "primary" | "outline"
  children: React.ReactNode
  href?: string
  external?: boolean
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export const Button = ({
  variant = "primary",
  children,
  href,
  external = false,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) => {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-medium transition-colors"
  const variants = {
    primary: "bg-accent text-bg-primary hover:bg-accent-hover",
    outline: "border border-text-muted text-text-primary hover:bg-bg-card",
  }
  const classes = `${base} ${variants[variant]} ${className}`

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
