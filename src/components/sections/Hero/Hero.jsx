import { images } from '../../../data/images'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.decorBg}>
          <img src={images.heroBg} alt="Приглашаем на свадьбу" className={styles.bgImage} />
        </div>
      </div>
    </section>
  )
}