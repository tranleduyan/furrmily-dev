/* Components */
import React from 'react'

/* Stylings */
import '../../../Styles/Components/Inputfields/StandardInputField/StandardInputField.css'

/* Icons */

function StandardInputField(props) {
  const {onChange, error} = props;
  const className=`${props.className} inputFieldContainer`;
  const inputClassName = (error) ? `${props.inputClassName} paragraph2 inputField inputFieldError` 
                                 : `${props.inputClassName} paragraph2 inputField`;

  /* Functions */
  const handleInputChange = (event) =>{
    const { name, value } = event.target;
    onChange(name, value);
  }
  return (
    <div className={className}>
      <label htmlFor={props.htmlFor} className='heading3 inputFieldTitle'>{props.title}</label>
      <input type={props.type} 
             name={props.name}
             id={props.id} 
             className={inputClassName} 
             value={props.value} 
             onChange={handleInputChange}
             maxLength={props.maxLength || undefined}/>
  </div>
  )
}

export default StandardInputField