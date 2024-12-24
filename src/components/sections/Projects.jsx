import '../../styles/Projects.css'
import { useState } from 'react'
import projects from '../../projects'
import ProjectCard from '../ProjectCard'
import RadioButtons from '../RadioButtons'

const Projects = () => {
  const [projectCategory, setProjectCategory] = useState('featured')
  const [isHoverActive, setIsHoverActive] = useState(true)
  const categories = [
    'featured', 
    'web', 
    'games', 
    'tools'
  ]

  const switchCategory = (category) => {
    setProjectCategory(category)
  }

  const mouseEnterHandler = () => {
    setIsHoverActive(true)
  }
  
  const mouseLeaveHandler = (evt) => {
    setIsHoverActive(false)
  }
  
  return (
    <section className="Projects" id="projects">
      
      <div className="wrapper">
        <h2>
          <span className={isHoverActive ? 'category active' : 'category'} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            {projectCategory}
            <span className='indicator'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
                <path d="M5.143 9.847a1 1 0 0 0 1.715 0l3.999-6.665a1 1 0 0 0-.858-1.515H2.001a1 1 0 0 0-.858 1.515z" />
              </svg>
            </span>
          </span> Projects
        </h2>

        <div className='switcher' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
          <div className={isHoverActive ? 'categories active' : 'categories'}>
            {categories.filter((category) => {
              return category !== projectCategory
            }).map((category) => (
              <button className='category' key={category} onClick={() => switchCategory(category)}>{category}</button>
            ))}
          </div>
        </div>

        <div className="projects">
          {projects.filter((project) => {
            return projectCategory === "all" || project.types.some((t) => t.toLowerCase() === projectCategory.toLowerCase())
          }).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
