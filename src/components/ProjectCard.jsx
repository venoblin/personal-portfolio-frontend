import '../styles/ProjectCard.css'

const ProjectCard = (props) => {
  return (
    <div className="ProjectCard">

      <div className='info'>
        <h3 className='title'>{props.project.title}</h3>

        <p className="desc">{props.project.desc}</p>

        <div className="techs">
          {props.project.techs.map((tech) => (
            <p key={tech}>{tech}</p>
          ))}
        </div>

        <div className='lower-wrapper'>
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

          <div className='img-wrapper'>
            <img src={props.project.image} alt={`${props.project.title} project`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
