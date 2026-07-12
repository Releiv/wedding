import { useState } from 'react'
import { content } from '../../../data/content'
import { images } from '../../../data/images'
import { AnimatedSection } from '../../common/AnimatedSection'
import { FloatingElement } from '../../ui/FloatingElement'
import { Button } from '../../ui/Button'
import styles from './RSVP.module.css'

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL

export function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    drinks: [],
    stay: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      if (checked) {
        setFormData(prev => ({
          ...prev,
          drinks: [...prev.drinks, value]
        }))
      } else {
        setFormData(prev => ({
          ...prev,
          drinks: prev.drinks.filter(d => d !== value)
        }))
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          attendance: formData.attendance,
          drinks: formData.drinks.join(', '),
          stay: formData.stay,
        }),
      })

      setIsSubmitted(true)
      
    } catch {
      setError('Ошибка при отправке. Попробуйте еще раз.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className={styles.rsvp}>
      <div className={styles.container}>
        <FloatingElement animation="float-left" className={styles.decorFlower1}>
          <img src={images.decorFlower3} alt="" />
        </FloatingElement>

        <FloatingElement animation="float-right" className={styles.decorFlower2}>
          <img src={images.decorFlower1} alt="" />
        </FloatingElement>

        <FloatingElement animation="pulse-bounce" className={styles.decorDot}>
          <img src={images.dot} alt="" />
        </FloatingElement>

        <AnimatedSection animation="fade-up" className={styles.content}>
          <div className={styles.iconWrapper}>
            <img src={images.iconSection7} alt="" className={styles.icon} />
          </div>

          <p className={styles.title}>{content.rsvp.title}</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            {error && <div className={styles.errorMessage}>{error}</div>}

            <div className={styles.formGroup}>
              <label className={styles.label}>{content.rsvp.formLabels.name}</label>
              <p className={styles.subtitle}>{content.rsvp.formLabels.nameSubtitle}</p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Введите ваше имя и фамилию"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>{content.rsvp.formLabels.attendance}</label>
              <div className={styles.radioGroup}>
                {content.rsvp.attendanceOptions.map((option) => (
                  <label key={option} className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="attendance"
                      value={option}
                      checked={formData.attendance === option}
                      onChange={handleChange}
                      className={styles.radioInput}
                      required
                    />
                    <span className={styles.radioCustom} />
                    <span className={styles.radioText}>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>{content.rsvp.formLabels.drinks}</label>
              <div className={styles.checkboxGroup}>
                {content.rsvp.drinkOptions.map((option) => (
                  <label key={option} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="drinks"
                      value={option}
                      checked={formData.drinks.includes(option)}
                      onChange={handleChange}
                      className={styles.checkboxInput}
                    />
                    <span className={styles.checkboxCustom} />
                    <span className={styles.checkboxText}>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>{content.rsvp.formLabels.stay}</label>
              <div className={styles.radioGroup}>
                {content.rsvp.stayOptions.map((option) => (
                  <label key={option} className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="stay"
                      value={option}
                      checked={formData.stay === option}
                      onChange={handleChange}
                      className={styles.radioInput}
                      required
                    />
                    <span className={styles.radioCustom} />
                    <span className={styles.radioText}>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button 
              type="submit" 
              size="large" 
              className={styles.submitButton} 
              disabled={isLoading}
            >
              {isLoading ? 'Отправка...' : content.rsvp.buttonText}
            </Button>
          </form>

          {/* === СООБЩЕНИЕ ОБ УСПЕХЕ === */}
          {isSubmitted && (
            <div className={styles.successMessage}>
              <p className={styles.successText}>
                Спасибо за ответ! 💕
              </p>
              <p className={styles.successSubtext}>
                Ждём вас на свадьбе!
              </p>
            </div>
          )}

          <div className={styles.bottomLine}>
            <img src={images.sectionLine4} alt="" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}