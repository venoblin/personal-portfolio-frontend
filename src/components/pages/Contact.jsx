import '../../styles/Contact.css'
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

  return (
    <section className="Contact">
      <h2>Contact</h2>

      <form>
        <div className="upper-wrapper">
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
    </section>
  )
}

export default Contact
