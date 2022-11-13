import '../../styles/Skills.css'
import { useState } from 'react'

const Skills = () => {
  const [skillSet, setSkillSet] = useState('front')

  const handleClick = (evt) => {
    const target = evt.target
    setSkillSet(target.id)
  }

  return (
    <section className="Skills">
      <h2>Skills</h2>

      <div className="skills-container">
        <div className="inputs">
          <button id="front" onClick={(evt) => handleClick(evt)}>
            Front-End
          </button>
          <button id="back" onClick={(evt) => handleClick(evt)}>
            Back-End
          </button>
          <button id="software" onClick={(evt) => handleClick(evt)}>
            Sofware
          </button>
        </div>

        {skillSet === 'front' && (
          <div className="skill-container">
            <p>HTML</p>
            <p>CSS</p>
            <p>SASS</p>
            <p>JavaScript</p>
            <p>React.js</p>
          </div>
        )}

        {skillSet === 'back' && (
          <div className="skill-container">
            <p>Node.js</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>MySql/PostgreSQL</p>
            <p>PostgreSQL</p>
          </div>
        )}

        {skillSet === 'software' && (
          <div className="skill-container">
            <p>Git</p>
            <p>UNIX</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills
