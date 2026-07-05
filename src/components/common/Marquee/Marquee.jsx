import styles from './Marquee.module.css'

export function Marquee({ 
  text, 
  speed = 2, 
  textColor = '#FFFFFF' 
}) {
  const duration = `${100 / speed}s`
  
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeContainer}>
        <div 
          className={styles.marqueeContent}
          style={{ animationDuration: duration }}
        >
          {[...Array(12)].map((_, index) => (
            <div key={index} className={styles.marqueeItem}>
              <span className={styles.marqueeText} style={{ color: textColor }}>
                {text}
              </span>
              <span className={styles.marqueeSeparator} style={{ backgroundColor: textColor }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}