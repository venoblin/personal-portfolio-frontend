import NavBar from './NavBar'
import Home from './sections/Home'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

const Main = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>)
}

export default Main