import { content } from '../../../data/content'
import { images } from '../../../data/images'
import { AnimatedSection } from '../../common/AnimatedSection'
import { FloatingElement } from '../../ui/FloatingElement'
import { Button } from '../../ui/Button'
import styles from './Contacts.module.css'

export function Contacts() {
  return (
    <section className={styles.contacts}>
      <div className={styles.container}>
        {/* Фоновое изображение */}
        <div className={styles.backgroundImage}>
          <img src={images.photo6} alt="" />
        </div>

        {/* Декоративные элементы */}
        <FloatingElement animation="float-left" className={styles.decorFlower1}>
          <img src={images.decorFlower2} alt="" />
        </FloatingElement>

        <FloatingElement animation="float-right" className={styles.decorFlower2}>
          <img src={images.decorFlower3} alt="" />
        </FloatingElement>

        <AnimatedSection animation="fade-up" className={styles.content}>
          {/* Иконка раздела */}
          <div className={styles.iconWrapper}>
            <img src={images.iconSection3} alt="" className={styles.icon} />
          </div>

          <h2 className={styles.title}>{content.contacts.title}</h2>

          <div className={styles.contactsList}>
            {content.contacts.contacts.map((contact, index) => (
              <div key={index} className={styles.contactItem}>
                <div className={styles.contactInfo}>
                  <span className={styles.contactName}>{contact.name}</span>
                  <span className={styles.contactHandle}>{contact.handle}</span>
                </div>
                <Button
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="small"
                  className={styles.contactButton}
                >
                  Связаться
                </Button>
              </div>
            ))}
          </div>

          <p className={styles.note}>{content.contacts.note}</p>

          {/* Декоративные линии */}
          <div className={styles.lines}>
            <div className={styles.line} />
            <div className={styles.lineSmall} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}