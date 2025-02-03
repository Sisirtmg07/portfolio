import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < MOBILE_BREAKPOINT)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    let timeout: NodeJS.Timeout
    const onChange = (e: MediaQueryListEvent) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => setIsMobile(e.matches), 100) // Debounce for Android
    }

    const onResize = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT), 100)
    }

    mql.addEventListener("change", onChange)
    window.addEventListener("resize", onResize)

    // Initial check in case of inconsistencies
    setIsMobile(mql.matches)

    return () => {
      clearTimeout(timeout)
      mql.removeEventListener("change", onChange)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return isMobile
}
