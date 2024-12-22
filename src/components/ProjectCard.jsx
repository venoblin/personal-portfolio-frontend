import '../styles/ProjectCard.css'

const ProjectCard = (props) => {
  return (
    <div className="ProjectCard">
      <img src={props.project.image} alt={`${props.project.title} project`} />

      <div className='info'>
        <p className='title'>{props.project.title}</p>

        <div className="techs">
          {props.project.techs.map((tech) => (
            <p key={tech}>{tech}</p>
          ))}
        </div>

        <p className="desc">{props.project.desc}</p>

        <div className="links">
          {props.project.demo.length ? (
            <a className="btn" href={props.project.demo} target="_blank">
              Demo
            </a>
            ) : (
              ''
            )
          }
          <a className="btn" href={props.project.repo} target="_blank">
            Repo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
