import '../../styles/Projects.css'
import { useState } from 'react'
import it from '../../data/it'
import ProjectCard from '../ProjectCard'

const Projects = (props) => {
  const [projectCategory, setProjectCategory] = useState('featured')
  const [isHoverActive, setIsHoverActive] = useState(false)

  const categories = ['featured', 'web', 'game']

  const clickHandler = () => {
    setIsHoverActive(!isHoverActive)
  }

  const switchCategory = (category) => {
    setProjectCategory(category)
    setIsHoverActive(false)
  }

  return (
    <section className="Projects" id="projects">
      <div className="wrapper">
        <div className="switcher-wrapper">
          <h2 className="no-select">
            <span
              className={isHoverActive ? 'category active' : 'category'}
              onClick={categories.length > 1 && clickHandler}
            >
              {projectCategory}

              {categories.length > 1 && (
                <span className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
                    <path d="M5.143 9.847a1 1 0 0 0 1.715 0l3.999-6.665a1 1 0 0 0-.858-1.515H2.001a1 1 0 0 0-.858 1.515z" />
                  </svg>
                </span>
              )}
            </span>{' '}
            Projects
          </h2>
          <span className="switcher">
            <span
              className={isHoverActive ? 'categories active' : 'categories'}
            >
              {categories
                .filter((category) => {
                  return category !== projectCategory
                })
                .map((category) => (
                  <button
                    className="category"
                    key={category}
                    onClick={() => switchCategory(category)}
                  >
                    {category}
                  </button>
                ))}
            </span>
          </span>
        </div>

        <div className="projects">
          {it.projects
            .filter((project) => {
              return project.types.some(
                (t) => t.toLowerCase() === projectCategory.toLowerCase()
              )
            })
            .map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
