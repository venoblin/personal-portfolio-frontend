import '../styles/NavBar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleMenu = () => {
    document.body.classList.toggle('show-menu')
    setIsExpanded(!isExpanded)
  }

  const hideMenu = () => {
    document.body.classList.remove('show-menu')
    setIsExpanded(false)
  }

  return (
    <nav className={`NavBar${props.scrollState.isScrolling ? ' scroll' : ''}${isExpanded ? ' show-menu' : ''}`}>
      <a className="link logo" href="#home" onClick={hideMenu}>
        Jon <span>/ IT</span>
      </a>
      <div className="links-container">
        <a className="link" href="#certifications" onClick={hideMenu}>
          Certifications
        </a>
        <a className="link" href="#skills" onClick={hideMenu}>
          Skills
        </a>
        <a className="link" href="#projects" onClick={hideMenu}>
          Projects
        </a>
        <a className="link" href="#about" onClick={hideMenu}>
          About
        </a>
        <a className="link" href="#contact" onClick={hideMenu}>
          Contact
        </a>

        <div className="icons-container">
          <a
            href="https://github.com/venoblin"
            target="_blank"
            onClick={hideMenu}
          >
            <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4.1-28.8.1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7.1 30.6c0 4.8.1 8.6.1 10c0 4.3-3 9.5-11.5 8c-66-22.1-112.2-84.9-112.2-158.3c0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8m-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7.6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9.4-3.7-.4-3.9-1.7m-9.1 3.2c-2.2.2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7.9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4m-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3m-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3.6c1.3 1.3 1.8 3.3.9 4.1c-.9 1.1-2.8.9-4.3-.6m-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9.6-2.6 0-3.7-1.5m-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5.6c1.1 1.3 1.3 2.8.4 3.5c-.9.9-2.4.4-3.5-.6m-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3.7 1.9 1.8 1.5 2.6c-.4.9-1.7 1.1-2.8.4" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/jonathanvillagomezhernandez/"
            target="_blank"
            onClick={hideMenu}
          >
            <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5m282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9z" />
            </svg>
          </a>
        </div>
      </div>

      <button className="menu-icon" onClick={toggleMenu}>
        {isExpanded ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94z" clipRule="evenodd"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75M0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8m.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z" clipRule="evenodd"></path>
          </svg>
        )}
      </button>
    </nav>
  )
}

export default NavBar
