/* Components */
import React from 'react'

/* Stylings */
import '../../../Styles/Components/Buttons/StandardButton/StandardButton.css'

/* Icons */

function StandardButton(props) {
  const className=`${props.className} flexRowCenter ${props.buttonSize}Button`;
  return (
    <button type='button' className={className}>
      <p className='button'>{props.title}</p>
    </button>
  )
}

export default StandardButton