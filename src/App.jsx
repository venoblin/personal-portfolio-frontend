import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
