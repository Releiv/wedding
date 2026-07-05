import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import styles from './AnimatedSection.module.css'

export function AnimatedSection({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  className = '',
  ...props 
}) {
  const { ref, isVisible } = useScrollAnimation()
  
  const animationClass = {
    'fade-up': 'fadeUp',
    'fade-left': 'fadeLeft',
    'fade-in': 'fadeIn',
    'zoom-in': 'zoomIn',
  }[animation] || 'fadeUp'

  return (
    <div
      ref={ref}
      className={`${styles.animatedSection} ${styles[animationClass]} ${isVisible ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
      {...props}
    >
      {children}
    </div>
  )
}