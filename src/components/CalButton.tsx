import { useEffect, type ReactNode, type CSSProperties } from 'react'
import { getCalApi } from '@calcom/embed-react'

// Cal.com handle + event-type. Edit here to point at a different scheduling link.
const CAL_LINK = 'varosync/intro'
const CAL_NAMESPACE = 'intro'

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
 * Cal.com "Book an intro" button. Clicking pops the Cal.com booking modal
 * over the page — no navigation, no backend required. Style the button via
 * className like any other element; behavior comes from the data-cal-* attrs.
 *
 * Drop it anywhere a "schedule a call" / "book an intro" CTA makes sense.
 */
export function CalButton({ children, className, style, ariaLabel }: Props) {
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })
      if (cancelled) return
      // Match the site palette: ink as the accent, light theme by default.
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#15110b' },
          dark: { 'cal-brand': '#ffffff' },
        },
      })
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <button
      type="button"
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view"}'
      className={className}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
