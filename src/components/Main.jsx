import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './sections/Home'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'


const Main = () => {
  const [scrollState, setScrollState] = useState({
    isScrolling: false,
    currentScrollY: 0
  })
  const location = useLocation()

  useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50 && location.pathname === '/') {
          setScrollState({
            isScrolling: true,
            currentScrollY: window.scrollY - 50
          })
        } else {
          setScrollState({
            isScrolling: false,
            currentScrollY: 0
          })
        }
      })
  }, [])
  
  return (
    <div>
      <NavBar scrollState={scrollState} />

      <main>
        <Home scrollState={scrollState} />
        <div className='sections'>
          <Projects />
          <About />
          <Contact />
        </div>
      </main>
    </div>)
}

export default Main