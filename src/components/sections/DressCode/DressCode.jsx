import { content } from '../../../data/content'
import { images } from '../../../data/images'
import { AnimatedSection } from '../../common/AnimatedSection'
import { FloatingElement } from '../../ui/FloatingElement'
import styles from './DressCode.module.css'

export function DressCode() {
  return (
    <section className={styles.dressCode}>
      <div className={styles.container}>
        <FloatingElement animation="float-left" className={styles.decorFlower1}>
          <img src={images.decorFlower2} alt="" />
        </FloatingElement>

        <FloatingElement animation="float-right" className={styles.decorFlower2}>
          <img src={images.decorFlower3} alt="" />
        </FloatingElement>

        <FloatingElement animation="pulse-soft" className={styles.decorLeaf}>
          <img src={images.decorLeaf1} alt="" />
        </FloatingElement>

        <AnimatedSection animation="fade-up" className={styles.content}>
          <div className={styles.iconWrapper}>
            <img src={images.iconSection1} alt="" className={styles.icon} />
          </div>

          <h2 className={styles.title}>{content.dressCode.title}</h2>
          
          <p className={styles.description}>{content.dressCode.description}</p>
          
          {/* === КАРТИНКА МЕЖДУ ТЕКСТАМИ === */}
          <div className={styles.imageWrapper}>
            <img 
              src={images.dressCodeImage} 
              alt="Дресс-код" 
              className={styles.dressImage}
            />
          </div>
          
          <div className={styles.noteWrapper}>
            <p className={styles.note}>{content.dressCode.note}</p>
          </div>

          <div className={styles.lines}>
            <div className={styles.line} />
            <div className={styles.lineSmall} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}