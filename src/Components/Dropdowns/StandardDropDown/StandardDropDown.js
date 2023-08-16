/* Components */
import React, { useState, useEffect } from 'react'
import Select, { components } from 'react-select';

/* Stylings */
import '../../../Styles/Components/DropDowns/StandardDropDown.css'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function StandardDropDown(props) {

  const {onChange, error, options, isDisabled } = props;
  const className=`${props.className} StandardDropDown-container`;
  const [maxMenuHeight, setMaxMenuHeight] = useState(0);

  /* Functions */
  const handleInputChange = (selectedOption) =>{
    const { value } = selectedOption;
    onChange(props.name, value);
  }
  
  /* Component to sub for Drop Down Indicator of 'Select' - Override Icon and Styling Font Size*/
  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <FontAwesomeIcon style={{fontSize:'calc(1.65vmin)'}}icon={faChevronDown} />
      </components.DropdownIndicator>
    );
  };

  /* Component to remove Indicator Separator of 'Select' */
  const IndicatorSeparator = () => null;

  useEffect(() => {

    /* Calculate Height for the Dropdown List's Height */
    const calculateHeight = () => {
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vmin = Math.min(vh, vw);
      setMaxMenuHeight(0.155 * vmin);
    };

    window.addEventListener('resize', calculateHeight);
    calculateHeight();
  
    return () => {
      window.removeEventListener('resize', calculateHeight);
    };

  },[]);

  /* Custom Styling for 'Select' */
  const customStyles = {
    
    /* Menu (List) Styling */
    menu: (provided, state) => ({
      ...provided,
      marginTop: '0',
    }),
    
    /* Options (List Options) Styling */
    options: (provided, state) => ({
      ...provided,
      fontSize: 'calc(1.65vmin)',
    }),

    /* Control Styling */
    control: (provided, state) => ({
      ...provided,
      fontSize: 'calc(1.65vmin)',
      height: 'calc(7.54vmin)', 
      borderRadius: '5px',
      paddingTop: '0px',
      paddingBottom: '0px',
      paddingLeft: 'calc(0.8vmin)', 
      paddingRight: 'calc(1.65vmin)',
      backgroundColor: error || state.isFocused ? 'var(--White)' 
                                                : 'var(--Gray1)',
      border: error ? 'solid calc(0.31vmin) var(--Red1)' 
                    : state.isFocused ? 'solid calc(0.31vmin) var(--Black)' 
                    : 'solid calc(0.31vmin) var(--Gray1)',
      boxShadow: 'none',
      '&:hover': {
        border: 'solid calc(0.31vmin) var(--Black)',
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
              onChange={handleInputChange}
              isDisabled={isDisabled}>
      </Select>
    </div>
  );
}

export default StandardDropDown