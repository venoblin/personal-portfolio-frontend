import '../styles/Skills.css'
import skills from '../skills';

const Skills = () => {

  return (
    <div className="Skills">

      {skills.map(skill => (
        <div className='skill' key={skill.name}>
          {skill.svg}
          <p className='name'>{skill.name}</p>
        </div>
      ))}
    
    </div>
  )
}

export default Skills
