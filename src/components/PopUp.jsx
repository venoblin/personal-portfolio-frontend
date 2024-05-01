import '../styles/PopUp.css'

const PopUp = (props) => {
  const clickHandler = () => {
    props.toggleIsPopUp(currentState => !currentState)
  }
  
  return (
    <div className='PopUp'>
      <p>{props.msg}</p>
      <button className='btn' onClick={clickHandler}>Ok</button>
    </div>
  )
}

export default PopUp