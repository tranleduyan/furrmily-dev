import React, { useState } from 'react'

import '../../../Styles/Components/DropDowns/StandardDropDown.css'

function StandardDropDown(props) {

  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const {onChange, error} = props;
  const className=`${props.className} StandardDropDown-container`;
  const dropDownClassName = (error) 
                         ? `${props.inputClassName} paragraph2 StandardDropDown StandardDropDown-error` 
                         : `${props.inputClassName} paragraph2 StandardDropDown`;

  /* Functions */
  const handleInputChange = (event) =>{
    const { name, value } = event.target;
    onChange(name, value);
  }

  return (
    <div className={className}>
      <label htmlFor={props.htmlFor} className='heading3 inputFieldTitle'>{props.title}</label>
      <select value={value} onChange={()=>{}}>
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}

export default StandardDropDown