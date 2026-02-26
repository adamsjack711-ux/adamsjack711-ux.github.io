import styles from './Projects.module.css'

export default function ProjectCard({ project, index }) {
  return (
    <article
      className={styles.card}
      style={{
        '--card-color': project.color,
        '--i': index,
      }}
      data-hover
    >
      <div className={styles.cardTop} />
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardName}>{project.name}</h3>
          <span className={styles.cardCategory}>{project.category}</span>
        </div>
        <p className={styles.cardDesc}>{project.description}</p>
        <div className={styles.cardTech}>
          {project.tech.map(t => (
            <span key={t} className={styles.techBadge}>{t}</span>
          ))}
        </div>
        <div className={styles.cardLinks}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={styles.cardLink}
            data-hover
          >
            GitHub ↗
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className={styles.cardLink}
              data-hover
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
