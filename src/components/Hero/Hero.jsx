import styles from './Hero.module.css'

const words = ['JACK', 'ADAMS-LOVELL']

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.headline}>
          {words.map((word, i) => (
            <span
              key={word}
              className={styles.word}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {word}
            </span>
          ))}
        </h1>
        <p className={styles.subtitle}>Developer — Kamloops, BC</p>
        <a href="#projects" className={styles.cta} data-hover>
          View my work
          <span className={styles.arrow}>↓</span>
        </a>
      </div>
      <span className={styles.badge} aria-hidden="true">PORTFOLIO — 2026</span>
    </section>
  )
}
