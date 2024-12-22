import '../../styles/Projects.css'
import { useState } from 'react'
import projects from '../../projects'
import ProjectCard from '../ProjectCard'
import RadioButtons from '../RadioButtons'

const Projects = () => {
  const [projectSet, setProjectSet] = useState('featured')

  return (
    <section className="Projects" id="projects">
      
      <div className="wrapper">
        <h2>Projects</h2>

        <RadioButtons labels={[
            'featured', 
            'web', 
            'games', 
            'tools'
          ]}
          state={projectSet}
          setState={setProjectSet}
        />

        <div className="projects">
          {projects.filter((project) => {
            return projectSet === "all" || project.types.some((t) => t.toLowerCase() === projectSet.toLowerCase());
          }).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
