import '../../styles/Contact.css'
import emojiWaving from './../../images/emoji-waving.gif'
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

  return (
    <section className="Contact" id="contact">

      <div className="wrapper">
      <h2>Contact</h2>
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
