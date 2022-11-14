import '../../styles/Home.css'
import emojiTyping from '../../images/emoji-typing.gif'

const Home = () => {
  return (
    <section className="Home">
      <div className="wrapper-top">
        <img className="emoji" src={emojiTyping} alt="Emoji typing" />
      </div>

      <div className="wrapper-bottom">
        <h1 className="intro-heading">
          Hello there!{' '}
          <span className="wrapper">
            I'm <span className="highlight">Jonathan</span>,
          </span>
          <span className="wrapper">
            a <span className="highlight">Software Engineer</span>!
          </span>
        </h1>

        <p>Passionate about coding and learning new things...</p>

        <a
          className="btn"
          href="https://www.linkedin.com/in/jonathanvillagomezhernandez/"
          target="_blank"
        >
          Let's Connect!
        </a>
      </div>
    </section>
  )
}

export default Home
