import '../../styles/Certifications.css'
import certifications from '../../data/certifications'

const Certifications = () => {
  return (
    <section className="Certifications" id="certifications">
      <div className="wrapper">
        <h2>Certifications</h2>

        <div className="all-certs">
          {certifications.map((c) => (
            <div className="cert" key={c.name}>
              <img src={c.img} alt={c.name} />
              <a className="btn hollow" href={c.pdf} target="_blank">
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
