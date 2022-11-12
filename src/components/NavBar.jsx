import '../styles/NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="NavBar">
      <p className="logo">
        Jon <span>/ Web Dev</span>
      </p>

      <div className="links-container">
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar
