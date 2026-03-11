import '../../styles/Certifications.css'
import comptiaAImg from '../../assets/images/a+.svg'
import comptiaAPdf from '../../assets/documents/ComptiaACertificate.pdf'
import comptiaNetworkImg from '../../assets/images/network+.svg'
import comptiaNetworkPdf from '../../assets/documents/ComptiaNetwork.pdf'

const Certifications = () => {
  const certs = [
    {
      name: 'CompTIA Network+',
      img: comptiaNetworkImg,
      pdf: comptiaNetworkPdf
    },
    { name: 'CompTIA A+', img: comptiaAImg, pdf: comptiaAPdf }
  ]

  return (
    <section className="Certifications" id="certifications">
      <div className="wrapper">
        <h2>Certifications</h2>

        <div className="all-certs">
          {certs.map((c) => (
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
