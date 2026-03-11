import '../../styles/Skills.css'
import skills from '../../data/skills'

const Skills = () => {
  return (
    <section className="Skills" id="skills">
      <div className="wrapper">
        <h2>Skills</h2>

        <div className="all-skills">
          {skills.map((s) => (
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
