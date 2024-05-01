import '../styles/PopUp.css'
import { Link } from 'react-router-dom'

const PopUp = (props) => {
  return (
    <div className='PopUp'>
      <h1>{props.code}</h1>
      <h2>{props.msg}</h2>
      <Link className='btn' to='/'>Home</Link>
    </div>
  )
}

export default PopUp