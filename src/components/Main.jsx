import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Contact from './sections/Contact'


const Main = () => {
  const [isScrolling, setIsStrolling] = useState(false)
    const location = useLocation()

  useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50 && location.pathname === '/') {
          setIsStrolling(true)
        } else {
          setIsStrolling(false)
        }
      })
  }, [])
  
  return (
    <div>
      <header>
        <NavBar isScrolling={isScrolling} />
      </header>

      <main>
        <Home />
        <div className='sections'>
          <Projects />
          <Contact />
        </div>
      </main>
    </div>)
}

export default Main