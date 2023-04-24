import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
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
      <Routes>
        <Route
          path="/"
          element={
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
            </div>
          }
        />

        <Route path="/viewer/:pdfName" element={<PDFViewer />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
