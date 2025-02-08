import '../../styles/About.css'
import emojiWaving from '../../assets/images/emoji-waving.gif'

const About = () => {
  return (
    <section className='About' id='about'>
      <div className='wrapper'>
        <div className='about-me'>
          <h2>About Me</h2>
          <p>
            Hi, I'm Jonathan, a CompTIA A+ certified IT professional with a passion for technology and a knack for problem-solving. My natural curiosity about how things work led me to pursue a career in IT, where I enjoy tackling technical challenges and helping others overcome their IT hurdles. While my background includes experience in software development (which has given me a strong foundation in logic and problem-solving), my focus is now firmly on IT support and system administration. 
            I'm proficient in troubleshooting hardware and software issues across various platforms, including Windows, macOS, and Linux. I'm also familiar with networking concepts and have experience setting up and maintaining networks.  I'm particularly interested in automation and scripting, and I've developed several scripts using Bash and Python to streamline tasks and improve efficiency.  You can find examples of these on my GitHub profile (link below). 
            Outside of IT, I enjoy spending time with friends and family, staying active through workouts, and exploring the Star Wars universe.  But even in my free time, I often find myself tinkering with technology and learning new things. I believe that continuous learning is essential in the ever-evolving world of IT, and I'm committed to staying up-to-date with the latest trends and technologies. 
            I'm eager to contribute my skills and enthusiasm to a challenging IT role where I can make a real difference.  I'm a quick learner, adaptable, and dedicated to providing excellent technical support and solutions.
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