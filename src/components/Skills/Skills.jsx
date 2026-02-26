import { useIntersection } from '../../hooks/useIntersection'
import styles from './Skills.module.css'

const skills = {
  Languages: [
    ['JavaScript', '2xl'],
    ['HTML',       'xl'],
    ['CSS',        'xl'],
    ['Python',     'lg'],
    ['SQL',        'sm'],
  ],
  Tools: [
    ['React',          'xl'],
    ['Git',            'xl'],
    ['Vite',           'lg'],
    ['Chrome DevTools','lg'],
    ['Figma',          'sm'],
  ],
  Domains: [
    ['Web Security',       '2xl'],
    ['UI Design',          'xl'],
    ['Responsive Layout',  'xl'],
    ['Version Control',    'lg'],
  ],
}

export default function Skills() {
  const [ref, visible] = useIntersection()

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.inner}>
        <div
          ref={ref}
          className={`${styles.header} animate ${visible ? 'visible' : ''}`}
        >
          <h2 className={styles.title}>Skills</h2>
          <p className={styles.subtitle}>What I work with</p>
        </div>
        <div className={styles.columns}>
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className={styles.column}>
              <h3 className={styles.groupTitle}>{group}</h3>
              <div className={styles.wordCloud}>
                {items.map(([skill, size]) => (
                  <span
                    key={skill}
                    className={styles.word}
                    style={{ fontSize: `var(--text-${size})` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
