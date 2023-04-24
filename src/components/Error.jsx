import '../styles/Error.css'

const Error = (props) => {
  return (
    <div className='Error'>
      <h1>{props.code}</h1>
      <h2>{props.msg}</h2>
    </div>
  )
}

export default Error