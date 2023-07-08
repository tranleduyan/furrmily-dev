import React from 'react'

/* Stylings */
import '../../../Styles/Components/Buttons/IconButton/IconButton.css'

function IconButton(props) {
  const className=`${props.className} iconButton`  
  return (
    <button className={className} onClick={props.onClick}>
        {props.icon}
  </button>
  )
}

export default IconButton