import '../../styles/Home.css'
import emojiTyping from '../../images/emoji-typing.gif'
import Skills from '../Skills'

const Home = () => {
  return (
    <section className="Home">
      <div className='emoji-wrapper'>
        <img className="emoji" src={emojiTyping} alt="Emoji typing" />
      </div>
      
      <div>
        <h1 className="intro-heading">
          Hello there!{' '}
          <span className="wrapper">
            I'm <span className="highlight">Jonathan</span>,
          </span>
          <span className="wrapper">
            a <span className="highlight">Full-Stack Engineer</span>!
          </span>
        </h1>
        <a
          className="btn"
          href="https://www.linkedin.com/in/jonathanvillagomezhernandez/"
          target="_blank"
        >
          Let's Connect!
        </a>
      </div>
      <Skills />
    </section>
  )
}

export default Home
