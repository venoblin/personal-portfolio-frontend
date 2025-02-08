import '../../styles/About.css'
import emojiWaving from '../../assets/images/emoji-waving.gif'

const About = () => {
  return (
    <section className='About' id='about'>
      <div className='wrapper'>
        <div className='about-me'>
          <h2>About Me</h2>
          <p>
          Hi, I'm Jonathan, a CompTIA A+ certified IT professional. My love for fixing things, my natural curiosity about how things work, 
          and my passion for technology led me to pursue a career in IT. Outside of IT, I enjoy spending time with friends and family, 
          staying active through workouts, and exploring the Star Wars universe. But even in my free time, I often find myself tinkering 
          with technology and learning new things. I believe that continuous learning is essential in the ever-evolving world of IT, and 
          I'm committed to staying up-to-date with the latest trends and technologies.
          </p>
        </div>

        <div className='emoji-wrapper'>
          <img className='emoji' src={emojiWaving} alt='Wavinng emoji' />
        </div>
      </div>
    </section>
  )
}

export default About  