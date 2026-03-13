import '../../styles/Projects.css'
import ProjectCard from '../ProjectCard'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

const Projects = () => {
  const appContext = useContext(AppContext)

  return (
    <section className="Projects" id="projects">
      <div className="wrapper">
        <h2>Featured Projects</h2>

        <div className="projects">
          {appContext.portfolioContent?.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
