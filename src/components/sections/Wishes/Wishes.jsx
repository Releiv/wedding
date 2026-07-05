import { content } from '../../../data/content'
import { images } from '../../../data/images'
import { AnimatedSection } from '../../common/AnimatedSection'
import { FloatingElement } from '../../ui/FloatingElement'
import styles from './Wishes.module.css'

export function Wishes() {
  return (
    <section className={styles.wishes}>
      <div className={styles.container}>
        {/* Декоративный фон */}
        <div className={styles.decorBg}>
          <img src={images.sectionBg} alt="" className={styles.bgImage} />
        </div>

        {/* Декоративные элементы */}
        <FloatingElement animation="float-right" className={styles.decorFlower1}>
          <img src={images.decorFlower1} alt="" />
        </FloatingElement>

        <FloatingElement animation="float-left" className={styles.decorFlower2}>
          <img src={images.decorFlower2} alt="" />
        </FloatingElement>

        <AnimatedSection animation="fade-left" className={styles.content}>
          {/* Иконка раздела */}
          <div className={styles.iconWrapper}>
            <img src={images.iconSection2} alt="" className={styles.icon} />
          </div>

          <h2 className={styles.title}>{content.wishes.title}</h2>
          
          <div className={styles.textWrapper}>
            <p className={styles.description}>{content.wishes.description}</p>
          </div>
          
          <div className={styles.noteWrapper}>
            <p className={styles.note}>{content.wishes.note}</p>
          </div>

          {/* Декоративная линия */}
          <div className={styles.bottomLine}>
            <img src={images.sectionLine6} alt="" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}