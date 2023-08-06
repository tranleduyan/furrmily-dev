import React, { useState, useEffect } from 'react'
import Select, { components } from 'react-select';
import '../../../Styles/Components/DropDowns/StandardDropDown.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function StandardDropDown(props) {

  const {onChange, error, options} = props;
  const className=`${props.className} StandardDropDown-container`;
  const [maxMenuHeight, setMaxMenuHeight] = useState(0);

  /* Functions */
  const handleInputChange = (event) =>{
    const { name, value } = event.target;
    onChange(name, value);
  }
  
  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <FontAwesomeIcon style={{fontSize:'calc(1.65vmin)'}}icon={faChevronDown} />
      </components.DropdownIndicator>
    );
  };

  const IndicatorSeparator = () => null;  // Custom component that renders nothing

  useEffect(() => {
    const calculateHeight = () => {
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vmin = Math.min(vh, vw);
      setMaxMenuHeight(0.155 * vmin);  // 50vmin
    };

    window.addEventListener('resize', calculateHeight);
    calculateHeight();  // Initial calculation
  
    return () => {
      window.removeEventListener('resize', calculateHeight);
    };

  },[]);

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      marginTop: '0',
    }),
    options: (provided, state) => ({
      ...provided,
      fontSize: 'calc(1.65vmin)',
    }),
    control: (provided, state) => ({
      ...provided,
      fontSize: 'calc(1.65vmin)',
      height: 'calc(7.54vmin)', 
      borderRadius: '5px',
      paddingTop: '0px',
      paddingBottom: '0px',
      paddingLeft: 'calc(0.8vmin)', 
      paddingRight: 'calc(1.65vmin)',
      backgroundColor: error || state.isFocused ? 'var(--White)' : 'var(--Gray1)',
      border: error ? 'solid 3px var(--Red1)' : state.isFocused ? 'solid 3px var(--Black)' : 'solid 3px var(--Gray1)',
      boxShadow: 'none',
      '&:hover': {
        border: 'solid 3px var(--Black)',
    }
    }),
  }

  return (
    <div className={className}>
      <label htmlFor={props.htmlFor} className='heading3 StandardDropDown-title'>{props.title}</label>
      <Select name={props.name} 
              id={props.id} 
              value={props.value} 
              options={options}
              styles={customStyles}
              placeholder={props.placeholder}
              components={{DropdownIndicator, IndicatorSeparator}}
              maxMenuHeight={maxMenuHeight}
              >
      </Select>
    </div>
  );
}

export default StandardDropDown