import '../../styles/About.css'
import emojiWaving from '../../assets/images/emoji-waving.gif'

const About = () => {
  return (
    <section className='About' id='about'>
      <div className='wrapper'>
        <div className='about-me'>
          <h2>About Me</h2>
          <p>
            Hi, I'm Jonathan, a highly motivated Full-Stack Developer. 
            I enjoy solving issues, building things, and everything involving technology, which naturally
            led me to coding. While I do specialize in Full-Stack Development, I love delving into other aspects
            of programming in my free time. Outside of programming, I enjoy spending time with friends and family, 
            working out, gaming, and everything Star Wars.
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