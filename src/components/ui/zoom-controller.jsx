import { useEffect } from 'react'

export function ZoomController() {
  useEffect(() => {
    // Set zoom to 100% (1.0)
    const setZoom = () => {
      try {
        // For modern browsers
        document.body.style.zoom = '1.0'
        
        // Fallback for browsers that don't support zoom
        if (document.body.style.zoom === undefined) {
          // Use transform scale as fallback
          document.body.style.transform = 'scale(0.80)'
          document.body.style.transformOrigin = 'top left'
          document.body.style.width = '80%' // Compensate for scale
          document.body.style.height = '80%'
        }
      } catch (error) {
        console.log('Zoom setting not supported in this browser')
      }
    }

    // Set zoom after a small delay to ensure DOM is ready
    const timer = setTimeout(setZoom, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return null
} 