import { useIntersection } from '../../hooks/useIntersection'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  const [ref, visible] = useIntersection()

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <div
          ref={ref}
          className={`${styles.header} animate ${visible ? 'visible' : ''}`}
        >
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.subtitle}>Things I've built</p>
        </div>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
