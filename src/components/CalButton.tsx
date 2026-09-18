import type { ReactNode, CSSProperties } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  /** Visible button content (label + optional icon) */
  children: ReactNode
  /** Tailwind / utility class string */
  className?: string
  /** Inline style passthrough */
  style?: CSSProperties
  /** aria-label override (otherwise children should be a label) */
  ariaLabel?: string
}

/**
 * Every call-to-action routes to the get-in-touch form. The calendar lives
 * behind that form now; nothing on the site opens it directly.
 */
export function CalButton({ children, className, style, ariaLabel }: Props) {
  return (
    <Link
      to="/get-in-touch"
      className={className}
      style={{ textDecoration: 'none', ...style }}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  )
}
