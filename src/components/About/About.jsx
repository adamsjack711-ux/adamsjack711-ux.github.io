import { useIntersection } from '../../hooks/useIntersection'
import styles from './About.module.css'

export default function About() {
  const [ref, visible] = useIntersection()

  return (
    <section id="about" className={styles.about}>
      <div
        ref={ref}
        className={`${styles.inner} animate ${visible ? 'visible' : ''}`}
      >
        <div className={styles.bio}>
          <p className={styles.intro}>
            Hi, I'm Jack — a developer based in Kamloops, BC. I build websites,
            tools, and experiments that live on the web.
          </p>
          <p className={styles.body}>
            I'm interested in the intersection of clean design and practical
            functionality — from client websites to browser extensions. Always
            learning, always building.
          </p>
        </div>
        <ul className={styles.facts}>
          <li>
            <span className={styles.factLabel}>Location</span>
            <span>Kamloops, BC, Canada</span>
          </li>
          <li>
            <span className={styles.factLabel}>Focus</span>
            <span>Web Development & Design</span>
          </li>
          <li>
            <span className={styles.factLabel}>GitHub</span>
            <a
              href="https://github.com/adamsjack711-ux"
              target="_blank"
              rel="noreferrer"
              className={styles.factLink}
              data-hover
            >
              adamsjack711-ux ↗
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
