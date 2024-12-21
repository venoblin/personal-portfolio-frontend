import NavBar from './NavBar'
import Home from './sections/Home'
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
        <Projects />
        <Contact />
      </main>
    </div>)
}

export default Main