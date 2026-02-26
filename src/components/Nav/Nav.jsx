import { useEffect, useRef, useState } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.monogram} data-hover>JAL</a>
      <ul className={styles.links}>
        <li><a href="#about"    className={styles.link}>About</a></li>
        <li><a href="#projects" className={styles.link}>Projects</a></li>
        <li><a href="#skills"   className={styles.link}>Skills</a></li>
      </ul>
    </nav>
  )
}
