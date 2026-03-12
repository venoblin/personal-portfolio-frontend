import '../../styles/About.css'
import emojiWaving from '../../assets/images/emoji-waving.gif'

const About = () => {
  return (
    <section className="About" id="about">
      <div className="wrapper">
        <h2>About Me</h2>

        <div className="about-wrapper">
          <div className="about-me">About me</div>

          <div className="emoji wrapper">
            <div className="emoji-container">
              <img className="emoji" src={emojiWaving} alt="Wavinng emoji" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
