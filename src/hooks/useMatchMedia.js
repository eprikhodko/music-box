import { useState, useEffect } from "react"

const useMatchMedia = (mediaQuery, initialValue) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isMatching, setIsMatching] = useState(initialValue)

  useEffect(() => {
    const watcher = window.matchMedia(mediaQuery)
    setIsMatching(watcher.matches)
    const listener = (matches) => {
      setIsMatching(matches.matches)
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    if (watcher.addEventListener) {
      watcher.addEventListener("change", listener)
    } else {
      watcher.addListener(listener)
    }

    return () => {
      if (watcher.removeEventListener) {
        return watcher.removeEventListener("change", listener)
      } else {
        return watcher.removeListener(listener)
      }
    }
  }, [mediaQuery])

  const isDesktopResolution = isMatching

  return { isDesktopResolution, isLoading }
}

export default useMatchMedia
