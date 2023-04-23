import './styles/App.css'
import NavBar from './components/NavBar'
import Home from './components/sections/Home'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import PDFViewer from './components/PDFViewer'

const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <main>
        <PDFViewer />
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
