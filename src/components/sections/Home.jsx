import '../../styles/Home.css'
import emojiTyping from '../../images/emoji-typing.gif'
import { useEffect, useRef } from 'react'
import Skills from '../Skills'

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
        </div>
      </div>
    </section>
  )
}

export default Home
