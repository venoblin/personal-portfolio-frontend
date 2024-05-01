import '../styles/PopUp.css'

const PopUp = (props) => {
  const clickHandler = () => {
    props.toggleState(currentState => !currentState)
  }
  
  return (
    <div className='PopUp'>
      <p>{props.msg || 'No message'}</p>
      <button type='button' className='btn' onClick={clickHandler}>Ok</button>
    </div>
  )
}

export default PopUp