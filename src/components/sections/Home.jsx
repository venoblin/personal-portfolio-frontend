import '../../styles/Home.css'
import emojiTyping from '../../assets/images/emoji-typing.gif'
import { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../contexts/AppContext'

const Home = (props) => {
  const appContext = useContext(AppContext)
  const innerWrapperRef = useRef()

  useEffect(() => {
    if (
      props.scrollState.isScrolling &&
      props.scrollState.currentScrollY <= 75
    ) {
      innerWrapperRef.current.style.margin = `${props.scrollState.currentScrollY}px 0 0 0`
    }
  })

  return (
    <section className="Home" id="home">
      <div className="inner-wrapper" ref={innerWrapperRef}>
        <div className="emoji-wrapper">
          <img className="emoji" src={emojiTyping} alt="Emoji typing" />
        </div>

        <div>
          <h1 className="intro-heading">
            Hello there!{' '}
            <span className="wrapper">
              I'm <span className="highlight">Jonathan</span>,
            </span>
            {appContext.portfolioContent?.homeHeader}
          </h1>
          <p className="location">Located in Wilmington, Delaware 📍</p>

          <div className="inputs">
            <a className="btn" href="#contact">
              Let's Connect!
            </a>

            <a
              className="btn hollow"
              rel="noreferrer"
              href={appContext.portfolioContent?.resume}
              target="_blank"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
