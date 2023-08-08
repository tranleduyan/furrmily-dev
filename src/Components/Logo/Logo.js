/* Components */
import React from 'react'

/* Stylings */
import '../../Styles/Components/Logo/Logo.css'

/* Icons */

function Logo(props) {
  const logoClassName = `${props.className} Logo-text`;
  return (
    <p className={logoClassName}>Furrmily</p>
  )
}

export default Logo