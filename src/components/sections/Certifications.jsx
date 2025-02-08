import '../../styles/Certifications.css'
import comptiaAPng from '../../assets/images/comptia-a+.png'
import comptiaACert from '../../assets/documents/ComptiaACertificate.pdf'

const Certifications = () => {
  return (
    <section className='Certifications' id='certifications'>
      <div className='wrapper'>
        <h2>Certifications</h2>

        <div className='all-certs'>
          <div className='cert'>
            <img src={comptiaAPng} alt='CompTIA A+' />
            <a className='btn hollow' href={comptiaACert} target="_blank">View</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications