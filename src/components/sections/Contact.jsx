import '../../styles/Contact.css'
import emojiWaving from './../../images/emoji-waving.gif'
import axios from 'axios'
import { BACKEND_API } from '../../global'
import { useState } from 'react'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (evt) => {
    const input = evt.target

    setFormState({ ...formState, [input.id]: input.value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    await axios.post(BACKEND_API, formState)
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section className="Contact-class" id="contact">
      <h2>Contact</h2>

      <div className="wrapper">
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
        </form>

        <div className="emoji-wrapper">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#E12C44"
              d="M39.7,-71.1C51.7,-61.8,61.9,-51.7,66.9,-39.7C71.9,-27.8,71.7,-13.9,73.7,1.2C75.7,16.2,80.1,32.5,74.1,42.7C68.1,53,51.8,57.3,37.8,64.1C23.7,70.9,11.9,80.2,-1.1,82.1C-14,83.9,-28.1,78.4,-40.5,70.7C-52.9,63,-63.7,53,-70.1,40.8C-76.6,28.7,-78.7,14.3,-77.2,0.9C-75.7,-12.6,-70.5,-25.2,-62.7,-35C-54.9,-44.8,-44.5,-51.9,-33.6,-61.8C-22.7,-71.8,-11.3,-84.6,1.2,-86.8C13.8,-88.9,27.7,-80.4,39.7,-71.1Z"
              transform="translate(100 100)"
            />
          </svg>
          <img className="emoji" src={emojiWaving} alt="Waving emoji" />
        </div>
      </div>
    </section>
  )
}

export default Contact
