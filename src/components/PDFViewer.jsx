import '../styles/PDFViewer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

const PDFViewer = () => {
  const [numPage, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1)
  let { pdfName } = useParams()
  let navigate = useNavigate()

  const onDocumentLoad = () => {
    setNumPages(numPage)
  }

  const zoomOutHandler = () => {
    if (scale > 0.5) setScale(prev => prev - 0.1)
  }

  const zoomInHandler = () => {
    setScale(prev => prev + 0.1)
  }

  const closeHandler = () => {
    navigate('/')
  }


  return ( 
    <div className='PDFViewer'>
      <div className='top-bar'>
        <div className='zoom-buttons'>
          <button onClick={zoomOutHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z"/>
            </svg>
          </button>

          <button onClick={zoomInHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/>
            </svg>
          </button>
        </div>

        <button onClick={closeHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
        </svg>
        </button>
      </div>

      <div className='viewer'>
        <Document file={`/${pdfName}`} onLoadSuccess={onDocumentLoad}>
          <Page scale={scale} pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  )
}

export default PDFViewer