import '../styles/PDFViewer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

const PDFViewer = () => {
  const [numPage, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoad = () => {
    setNumPages(numPage)
  }

  const zoomOutHandler = () => {

  }

  const zoomInHandler = () => {

  }

  return ( 
    <div className='PDFViewer'>
      <Document file='/certificate.pdf' onLoadSuccess={onDocumentLoad}>
        <div className='inputs'>
          <button onClick={zoomOutHandler}>OUT</button>
          <button onClick={zoomInHandler}>IN</button>
        </div>
        <Page scale={1} pageNumber={pageNumber} />
      </Document>
    </div>
  )
}

export default PDFViewer