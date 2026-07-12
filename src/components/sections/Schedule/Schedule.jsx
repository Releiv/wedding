import { content } from '../../../data/content'
import { images } from '../../../data/images'
import { AnimatedSection } from '../../common/AnimatedSection'
import { FloatingElement } from '../../ui/FloatingElement'
import styles from './Schedule.module.css'

export function Schedule() {
  return (
    <section className={styles.schedule}>
      <div className={styles.container}>
        <FloatingElement animation="pulse-bounce" className={styles.decorDot1}>
          <img src={images.dot} alt="" />
        </FloatingElement>

        <FloatingElement animation="pulse-bounce-reverse" className={styles.decorDot2}>
          <img src={images.dot} alt="" />
        </FloatingElement>

        <FloatingElement animation="pulse-bounce" className={styles.decorDot3}>
          <img src={images.dot} alt="" />
        </FloatingElement>

        <FloatingElement animation="float-left" className={styles.decorLeaf1}>
          <img src={images.decorLeaf1} alt="" />
        </FloatingElement>

        <FloatingElement animation="float-right" className={styles.decorLeaf2}>
          <img src={images.decorLeaf2} alt="" />
        </FloatingElement>

        <FloatingElement animation="float-left" className={styles.decorFlower}>
          <img src={images.decorFlower1} alt="" />
        </FloatingElement>

        <AnimatedSection animation="fade-up" className={styles.content}>
          <div className={styles.header}>
            <img src={images.sectionLine4} alt="" className={styles.headerLine} />
            <h2 className={styles.title}>{content.schedule.title}</h2>
            <img src={images.sectionLine5} alt="" className={styles.headerLine} />
          </div>

          <div className={styles.timeline}>
            {content.schedule.items.map((item, index) => (
              <div key={index} className={styles.timelineItem}>

                <div className={styles.iconWrapper}>
                  <img 
                    src={images[item.icon]} 
                    alt={item.label} 
                    className={styles.iconImage}
                  />
                </div>
                
                <div className={styles.infoWrapper}>
                  <span className={styles.time}>{item.time}</span>
                  <span className={styles.label}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.decorBg1}>
            <img src={images.scheduleBg1} alt="" />
          </div>
          <div className={styles.decorBg2}>
            <img src={images.scheduleBg2} alt="" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}