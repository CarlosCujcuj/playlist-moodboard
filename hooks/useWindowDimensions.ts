import { useState, useEffect } from 'react'

interface WidthHeight {
  width: number
  height: number
}

const defaultProps = { width: 0, height: 0}

const getWindowDimensions = () : WidthHeight => {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window ?? defaultProps
    return { width, height}
  }
  
  return defaultProps
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  })

  return windowDimensions
}

export default useWindowDimensions