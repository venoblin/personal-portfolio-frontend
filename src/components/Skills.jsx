import '../styles/Skills.css'
import skills from '../skills';

const Skills = () => {

  return (
    <div className="Skills-class">

      {skills.map(skill => (
        <div className='skill'>
          {skill.svg}
          <p>{skill.name}</p>
        </div>
      ))}
    
    </div>
  )
}

export default Skills
