import '../styles/Error.css'
import { Link } from 'react-router-dom'

const Error = (props) => {
  return (
    <div className='Error'>
      <h1>{props.code}</h1>
      <h2>{props.msg}</h2>
      <Link className='btn' to='/'>Home</Link>
    </div>
  )
}

export default Error