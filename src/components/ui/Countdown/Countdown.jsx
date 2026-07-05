import { useState, useEffect } from 'react'
import styles from './Countdown.module.css'

export function Countdown({ targetDate = '2026-09-26T00:00:00' }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className={styles.countdownWrapper}>
      <div className={styles.countdown}>
        <div className={styles.title}>
          До нашей свадьбы осталось
        </div>
        <div className={styles.timer}>
          <div className={styles.countdownItem}>
            <span className={styles.number}>{String(timeLeft.days).padStart(2, '0')}</span>
            <span className={styles.label}>дней</span>
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.countdownItem}>
            <span className={styles.number}>{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className={styles.label}>часов</span>
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.countdownItem}>
            <span className={styles.number}>{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className={styles.label}>минут</span>
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.countdownItem}>
            <span className={styles.number}>{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className={styles.label}>секунд</span>
          </div>
        </div>
      </div>
    </div>
  )
}