/* Components */
import React from 'react'
import { Link } from 'react-router-dom'

/* Stylings */
import '../../../Styles/Components/Buttons/LinkButton/LinkButton.css'

/* Icons */

function LinkButton(props) {
  const className=`${props.className} flexRowCenter`
  return (
    <div className={className}>
        <Link to={props.to} className='link'>{props.title}</Link>
    </div>
  )
}

export default LinkButton