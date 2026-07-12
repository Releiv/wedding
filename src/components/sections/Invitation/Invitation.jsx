import { content } from '../../../data/content'
import { images } from '../../../data/images'
import { AnimatedSection } from '../../common/AnimatedSection'
import { FloatingElement } from '../../ui/FloatingElement'
import styles from './Invitation.module.css'

export function Invitation() {
  return (
    <section className={styles.invitation}>
      <div className={styles.container}>
        <div className={styles.decorBg}>
          <img src={images.sectionBg} alt="" className={styles.bgImage} />
        </div>

        <FloatingElement animation="float-left" className={styles.decorLeaf}>
          <img src={images.decorLeaf3} alt="" />
        </FloatingElement>

        <FloatingElement animation="float-right" className={styles.decorFlower}>
          <img src={images.decorFlower1} alt="" />
        </FloatingElement>

        <AnimatedSection animation="fade-up" className={styles.content}>
          <div className={styles.topLine}>
            <img src={images.sectionLine1} alt="" />
          </div>

          <div className={styles.textWrapper}>
            <p className={styles.text}>{content.invitation.text}</p>
          </div>

          <div className={styles.dateWrapper}>
            <span className={styles.date}>26 | 09 | 2026</span>
          </div>

          <div className={styles.imageWrapper}>
            <img 
              src={images.LebediImage} 
              alt="Лебеди" 
              className={styles.lebendiImage}
            />
          </div>

          <div className={styles.bottomLine}>
            <img src={images.sectionLine2} alt="" />
          </div>

          <div className={styles.location}>
            <p className={styles.locationTitle}>📍 {content.location.title}</p>
            <p className={styles.locationAddress}>{content.location.address}</p>
            
            <div className={styles.mapWrapper}>
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.698559%2C55.781934&z=16&pt=37.698559%2C55.781934"
                width="100%"
                height="300"
                frameBorder="0"
                allowFullScreen
                className={styles.mapIframe}
                title="Карта GOELRO Лофт"
              />
            </div>

            <a 
              href={content.location.mapLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              Открыть на карте
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}