import styles from './Button.module.css'

export function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'medium',
  href,
  type = 'button',
  className = '',
  ...props 
}) {
  const buttonClass = `
    ${styles.button}
    ${styles[variant]}
    ${styles[size]}
    ${className}
  `.trim()

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={buttonClass} {...props}>
      {children}
    </button>
  )
}