import { useState } from 'react'
import '../styles/PopUp.css'
import Loader from './Loader'

const PopUp = (props) => {
  const clickHandler = () => {
    props.togglePopUp(currentState => !currentState)
  }
  
  return (
    <div className='PopUp'>
      {!props.msg.length ? (
        <Loader />
      ) : (
        <div>
          <p>{props.msg}</p>
          <button type='button' className='btn' onClick={clickHandler}>Ok</button>
        </div>
      )}
    </div>
  )
}

export default PopUp