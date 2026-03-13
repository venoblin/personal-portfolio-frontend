import '../../styles/Skills.css'
import skills from '../../data/skills'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

const Skills = () => {
  const appContext = useContext(AppContext)

  return (
    <section className="Skills" id="skills">
      <div className="wrapper">
        <h2>Skills</h2>

        <div className="code-block">
          <p className="command">
            <span className="keyword">void </span>
            <span className="name">displayTechnologies </span>
            <span className="braces">{`( ) {`}</span>
          </p>

          <div className="techs">
            {skills.map((skill) => (
              <div className="skill" key={skill.name}>
                {skill.svg}
                <p className="name">{skill.name}</p>
              </div>
            ))}
          </div>

          <p className="command">
            <span className="braces">{`}`}</span>
          </p>
        </div>

        <div className="all-skills">
          {appContext.portfolioContent?.skills &&
            appContext.portfolioContent?.skills.map((s) => (
              <div className="skill" key={s.header}>
                <div className="skill-header">
                  {s.svg}
                  <h3>{s.header}</h3>
                </div>
                <ul>
                  {s.list.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
