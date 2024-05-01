import '../styles/NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='NotFound'>
      <h1>404</h1>
      <h2>Not found!</h2>
      <Link className='btn' to='/'>Home</Link>
    </div>
  )
}

export default NotFound