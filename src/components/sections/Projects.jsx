import '../../styles/Projects.css'
import { useState } from 'react'
import ProjectCard from '../ProjectCard'

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: 'Test',
      image:
        'https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg',
      demo: 'www.google.com',
      repo: 'www.google.com',
      techs: ['React', 'SASS', 'JavaScript'],
      desc: 'A test project'
    },
    {
      title: 'Test',
      image:
        'https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg',
      demo: 'www.google.com',
      repo: 'www.google.com',
      techs: ['React', 'SASS', 'JavaScript'],
      desc: 'A test project'
    },
    {
      title: 'Test',
      image:
        'https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg',
      demo: 'www.google.com',
      repo: 'www.google.com',
      techs: ['React', 'SASS', 'JavaScript'],
      desc: 'A test project'
    },
    {
      title: 'Test',
      image:
        'https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg',
      demo: 'www.google.com',
      repo: 'www.google.com',
      techs: ['React', 'SASS', 'JavaScript'],
      desc: 'A test project'
    }
  ])

  return (
    <section className="Projects-class" id="projects">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e12c44"
          fillOpacity="1"
          d="M0,32L24,37.3C48,43,96,53,144,85.3C192,117,240,171,288,176C336,181,384,139,432,138.7C480,139,528,181,576,208C624,235,672,245,720,213.3C768,181,816,107,864,80C912,53,960,75,1008,122.7C1056,171,1104,245,1152,256C1200,267,1248,213,1296,170.7C1344,128,1392,96,1416,80L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>

      <div className="wrapper">
        <h2>Projects</h2>

        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e12c44"
          fillOpacity="1"
          d="M0,32L24,37.3C48,43,96,53,144,85.3C192,117,240,171,288,176C336,181,384,139,432,138.7C480,139,528,181,576,208C624,235,672,245,720,213.3C768,181,816,107,864,80C912,53,960,75,1008,122.7C1056,171,1104,245,1152,256C1200,267,1248,213,1296,170.7C1344,128,1392,96,1416,80L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
    </section>
  )
}

export default Projects
