/* Components */
import React from 'react'

/* Stylings */
import '../../../Styles/Components/Inputfields/TextAreaInputField/TextAreaInputField.css'

/* Icons */

function TextAreaInputField(props) {
  const {onChange, error} = props;
  const className=`${props.className} TextArea-inputFieldContainer`;
  const inputClassName = (error) ? `${props.inputClassName} paragraph2 TextArea-inputField TextArea-inputFieldError` 
                                 : `${props.inputClassName} paragraph2 TextArea-inputField`;

  /* Functions */
  const handleInputChange = (event) =>{
    const { name, value } = event.target;
    onChange(name, value);
  }
  return (
    <div className={className}>
      <label htmlFor={props.htmlFor} className='heading3 TextArea-inputFieldTitle'>{props.title}</label>
      <textarea type={props.type} 
                name={props.name} 
                id={props.id} 
                className={inputClassName} 
                value={props.value} 
                onChange={handleInputChange}/>
  </div>
  )
}

export default TextAreaInputField