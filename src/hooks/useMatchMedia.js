import { useState, useLayoutEffect } from "react"

const useMatchMedia = (mediaQuery, initialValue) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isMatching, setIsMatching] = useState(initialValue)

  useLayoutEffect(() => {
    const watcher = window.matchMedia(mediaQuery)
    setIsMatching(watcher.matches)
    const listener = (matches) => {
      setIsMatching(matches.matches)
    }

    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 1200)

    setIsLoading(false)

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
