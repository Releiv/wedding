import { useState } from 'react'
import { content } from '../../../data/content'
import { images } from '../../../data/images'
import { AnimatedSection } from '../../common/AnimatedSection'
import { FloatingElement } from '../../ui/FloatingElement'
import { Button } from '../../ui/Button'
import styles from './RSVP.module.css'

export function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    drinks: [],
    stay: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
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

            <Button type="submit" size="large" className={styles.submitButton}>
              {isSubmitted ? '✅ Отправлено!' : content.rsvp.buttonText}
            </Button>
          </form>

          <div className={styles.bottomLine}>
            <img src={images.sectionLine4} alt="" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}