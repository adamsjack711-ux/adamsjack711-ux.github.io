import Cursor   from './components/Cursor/Cursor'
import Nav      from './components/Nav/Nav'
import Hero     from './components/Hero/Hero'
import About    from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills   from './components/Skills/Skills'
import Footer   from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
