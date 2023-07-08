/* Components */
import React from 'react'

/* Stylings */
import '../../Styles/Components/Message/Message.css'

/* Icons */
import {BsFillExclamationCircleFill} from 'react-icons/bs'

function Message(props) {
  const {messageType, visibility} = props;
  const className = `${props.className} messageContainer 
                     ${messageType === 'error' ? 'errorMessage'
                    : messageType === 'warning' ? 'warningMessage'
                    : messageType === 'instructional' ? 'instructionalMessage'
                    : ''}
                    ${visibility === false ? 'hide' : ''}`;
  return (
    <div className={className}>
      {messageType === 'error' && (
        <BsFillExclamationCircleFill className='paragraph1 errorIcon'/>
      )}
        <p className='paragraph2'>{props.content}</p>
    </div>
  )
}

export default Message