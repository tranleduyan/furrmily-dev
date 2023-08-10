/* Components */
import React from 'react'

/* Stylings */
import '../../../Styles/Components/Buttons/StandardButton/StandardButton.css'

/* Icons */

/* TODO: Remove button size, make width be adjustable, primary and secondary type instead */
function StandardButton(props) {
  const type = (!props.type) ? 'Primary' : `${props.type}`;
  const className=`${props.className} flexRowCenter Button ${type}Button `;
  return (
    <button type='button' className={className} onClick={props.onClick}>
      <p className='button'>{props.title}</p>
    </button>
  )
}

export default StandardButton