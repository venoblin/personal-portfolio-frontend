import '../../styles/Skills.css'
import skills from '../../skills';

const Skills = () => {

  return (
    <section className="Skills" id='skills'>

      <div className='wrapper'>
        <h2>Skills</h2>
        
        <div className='code-block'>
          <p className='command'>
            <span className='keyword'>void </span> 
            <span className='name'>displayTechnologies </span> 
            <span className='braces'>{`( ) {`}</span>
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
        
      </div>
    </section>
  )
}

export default Skills
