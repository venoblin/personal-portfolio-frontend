import '../../styles/Contact.css'
import emojiWaving from '../../assets/images/emoji-waving.gif'
import axios from 'axios'
import { BACKEND_API } from '../../global'
import { useState } from 'react'
import PopUp from '../PopUp'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isPopUp, toggleIsPopUp] = useState(false)
  const [popUpMsg, setPopUpMsg] = useState('')

  const handleChange = (evt) => {
    const input = evt.target

    setFormState({ ...formState, [input.id]: input.value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    toggleIsPopUp(currentState => !currentState)

    await axios.post(BACKEND_API, formState)
      .then(() => {
        setPopUpMsg('Successfully sent email!')
      }).catch(() => {
        setPopUpMsg('Error: Email not sent!')
      })
    
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('villagomezhjonathan@gmail.com')
  }

  return (
    <section className="Contact" id="contact">

      <div className="wrapper">
      <h2>Contact</h2>

        <div className='email'>
          <p>villagomezhjonathan@gmail.com</p>

          <button className='btn'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fillRule="evenodd">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                <path d="M9 2a2 2 0 0 0-2 2v2h2V4h11v11h-2v2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM4 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
              </g>
            </svg>
          </button>
        </div>
      
        <form onSubmit={handleSubmit}>
          <div className="upper-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              value={formState.name}
              onChange={(evt) => handleChange(evt)}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={formState.email}
              onChange={(evt) => handleChange(evt)}
            />
          </div>

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
            value={formState.subject}
            onChange={(evt) => handleChange(evt)}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            value={formState.message}
            onChange={(evt) => handleChange(evt)}
          ></textarea>

          <button className="btn" type="submit">
            Send!
          </button>

          {isPopUp && 
            <PopUp 
              msg={popUpMsg} 
              togglePopUp={toggleIsPopUp} 
            />
          }
        </form>
      </div>
    </section>
  )
}

export default Contact
