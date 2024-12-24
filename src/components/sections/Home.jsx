import '../../styles/Home.css'
import emojiTyping from '../../images/emoji-typing.gif'
import { useEffect, useRef } from 'react'

const Home = (props) => {
  const innerWrapperRef = useRef()

  useEffect(() => {
    if (props.scrollState.isScrolling && props.scrollState.currentScrollY <= 75) {
      innerWrapperRef.current.style.margin = `${props.scrollState.currentScrollY}px 0 0 0`
    }
  })
  
  return (
    <section className="Home">
      <div className='home-wrapper'>
        <div className='inner-wrapper' ref={innerWrapperRef}>
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
                a <span className="highlight">Full-Stack Developer</span>!
              </span>
            </h1>
            <p className='location'>Located in Wilmington, Delaware 📍</p>
            <a
              className="btn"
              href="https://www.linkedin.com/in/jonathanvillagomezhernandez/"
              target="_blank"
            >
              Let's Connect!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
