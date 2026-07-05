import { useEffect, useRef } from 'react'

export function useFloatingAnimation(animationClass) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    element.classList.add('animated-element')
    element.classList.add(animationClass)

    return () => {
      element.classList.remove('animated-element')
      element.classList.remove(animationClass)
    }
  }, [animationClass])

  return ref
}