import styles from './FloatingElement.module.css'

export function FloatingElement({ 
  children, 
  animation = 'float-left',
  className = '',
  ...props 
}) {
  return (
    <div 
      className={`${styles.floating} ${styles[animation]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}