import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let rafId
    let mouseX = -100, mouseY = -100
    let ringX  = -100, ringY  = -100

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const tick = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`
      }
      rafId = requestAnimationFrame(tick)
    }

    const onEnter = (e) => {
      if (e.target.closest('a, button, [data-hover]')) {
        ringRef.current?.classList.add(styles.expanded)
      }
    }
    const onLeave = (e) => {
      if (e.target.closest('a, button, [data-hover]')) {
        ringRef.current?.classList.remove(styles.expanded)
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout',  onLeave)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout',  onLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}
