/* Components */
import React, {useState} from 'react'

/* Stylings */
import '../../../Styles/Components/Inputfields/StandardInputField/StandardInputField.css'

function StandardInputField(props) {
  const [inputValue, setInputValue] = useState('');
  const className=`${props.className} inputFieldContainer`;
  const inputClassName= inputValue ? `${props.inputClassName} paragraph2 inputField inputFieldHasValue` : `${props.inputClassName} paragraph2 inputField`;

  /* Functions */
  const handleInputChange = (event) =>{
    setInputValue(event.target.value);
  }
  return (
    <div className={className}>
      <label htmlFor={props.htmlFor} className='heading3'>{props.title}</label>
      <input type={props.type} name={props.name} id={props.id} className={inputClassName} value={inputValue} onChange={handleInputChange} required/>
  </div>
  )
}

export default StandardInputField