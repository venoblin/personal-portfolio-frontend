import '../../styles/Projects.css'
import { useState } from 'react'
import projects from '../../projects'
import ProjectCard from '../ProjectCard'
import RadioButtons from '../RadioButtons'

const Projects = () => {
  const [projectCategory, setProjectCategory] = useState('featured')
  const categories = [
    'featured', 
    'web', 
    'games', 
    'tools'
  ]

  const switchCategory = (category) => {
    setProjectCategory(category)
  }

  return (
    <section className="Projects" id="projects">
      
      <div className="wrapper">
        <div className='h2-switcher'>
          <h2>
            <span className='category'>
              {projectCategory}
              <span className='indicator'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
	                <path d="M5.143 9.847a1 1 0 0 0 1.715 0l3.999-6.665a1 1 0 0 0-.858-1.515H2.001a1 1 0 0 0-.858 1.515z" />
                </svg>
              </span>
            </span> Projects
          </h2>

          <div className='switcher'>
            {categories.filter((category) => {
              return category !== projectCategory
            }).map((category) => (
              <p className='category' key={category} onClick={() => switchCategory(category)}>{category}</p>
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
