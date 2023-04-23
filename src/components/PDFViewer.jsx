import '../styles/PDFViewer.css'
import { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

const PDFViewer = () => {
  const [numPage, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoad = () => {
    setNumPages(numPage)
  }

  return ( 
    <div className='PDFViewer'>
      <Document file='/certificate.pdf' onLoadSuccess={onDocumentLoad}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  )
}

export default PDFViewer