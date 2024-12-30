import '../../styles/Projects.css'
import { useState } from 'react'
import { capitalizeStr } from '../../utils'
import projects from '../../projects'
import ProjectCard from '../ProjectCard'

const Projects = (props) => {
  const [projectCategory, setProjectCategory] = useState('featured')
  const [categories, setCategories] = useState([
    'featured', 
    'web', 
    'game', 
    'tool'
  ])

  const handleChange = (evt) => {
    setProjectCategory(evt.target.value);
  }
  
  return (
    <section className="Projects" id="projects">
      
      <div className="wrapper">
        <h2>
          <span>
            <label htmlFor="categories">Choose a category</label>
            <select id="categories" onChange={handleChange}>
              {categories.map((category) => (
                <option value={category} key={category}>{capitalizeStr(category)}</option>
              ))}
            </select> 
          </span> Projects
        </h2>

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
