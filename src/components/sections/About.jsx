import '../../styles/About.css'
import emojiWaving from '../../images/emoji-waving.gif'

const About = () => {
  return (
    <section className='About' id='#about'>
      <div className='wrapper'>
        <div className='about-me'>
          <h2>About Me</h2>
          <p>
            Hi, I'm Jonathan, a highly motivated software engineer with a passion for building innovative and user-friendly 
            applications. I recently graduated from General Assembly's Software Engineering Immersive program and I'm eager to 
            contribute my skills to a dynamic team.
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