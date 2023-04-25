import NavBar from './components/NavBar'
import Home from './components/sections/Home'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

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