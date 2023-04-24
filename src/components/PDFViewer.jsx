import '../styles/PDFViewer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

const PDFViewer = () => {
  const [numPage, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  let { pdfName } = useParams()

  const onDocumentLoad = () => {
    setNumPages(numPage)
  }

  const zoomOutHandler = () => {

  }

  const zoomInHandler = () => {

  }

  console.log(pdfName)

  return ( 
    <div className='PDFViewer'>
      <div className='top-bar'>
        <button onClick={zoomOutHandler}>OUT</button>
        <button onClick={zoomInHandler}>IN</button>
      </div>
      <Document className='document' file={`/${pdfName}`} onLoadSuccess={onDocumentLoad}>
        <Page scale={1} pageNumber={pageNumber} />
      </Document>
    </div>
  )
}

export default PDFViewer