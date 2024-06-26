import '../styles/RadioButtons.css'

const RadioButtons = (props) => {
  const handleClick = (label) => {

    props.setState(label)
  }
  
  return (
    <div className='radio-btns'>
      {props.labels.map((label, i) => (
        <button 
          key={i} 
          id={label}
          className={props.state === label ? 'active' : ''} 
          onClick={() => handleClick(label)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default RadioButtons