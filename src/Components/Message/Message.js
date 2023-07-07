/* Components */
import React from 'react'

/* Stylings */
import '../../Styles/Components/Message/Message.css'

/* Icons */
import {BsFillExclamationCircleFill} from 'react-icons/bs'

function Message(props) {
  const className = `${props.className} messageContainer`;
  return (
    <div className={className}>
        <BsFillExclamationCircleFill className='paragraph1 errorIcon'/>
        <p className='paragraph2'>{props.content}</p>
  </div>
  )
}

export default Message