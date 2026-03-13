import { useContext } from 'react'
import '../styles/Footer.css'
import { AppContext } from '../contexts/AppContext'

const Footer = () => {
  const appContext = useContext(AppContext)

  return (
    <footer className="Foot">
      <p>Jon / {appContext.portfolioContent?.heading} © 2022</p>
    </footer>
  )
}

export default Footer
