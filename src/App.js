import './styles/App.css'
import NavBar from './components/NavBar'
import Home from './components/sections/Home'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <main>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
