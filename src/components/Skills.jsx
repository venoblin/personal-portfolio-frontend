import '../styles/Skills.css'
import skills from '../skills';

const Skills = () => {

  return (
    <div className="Skills">
      <p className='command'>
        <span className='keyword'>void </span> 
        <span className='name'>displayTechnologies </span> 
        <span className='braces'>{`() {`}</span>
      </p>

      <div className='techs'>
        {skills.map(skill => (
          <div className='skill' key={skill.name}>
            {skill.svg}
            <p className='name'>{skill.name}</p>
          </div>
        ))}
      </div>
    
      <p className='command'><span className='braces'>{`}`}</span></p>
    </div>
  )
}

export default Skills
