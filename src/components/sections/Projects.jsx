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
            <span className='category'>{projectCategory}</span> Projects
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
