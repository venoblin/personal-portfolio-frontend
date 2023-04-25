import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import PDFViewer from './components/PDFViewer'
import Error from './components/Error'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/viewer/:pdfName" element={<PDFViewer />} />
        <Route path="*" element={<Error code="404" msg="Not Found :(" />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
