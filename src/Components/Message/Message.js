/* Components */
import React from 'react'

/* Stylings */
import '../../Styles/Components/Message/Message.css'

/* Icons */
import {BsFillExclamationCircleFill, BsFillExclamationTriangleFill} from 'react-icons/bs'

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
      {messageType === 'warning' && (
        <BsFillExclamationTriangleFill className='paragraph1 warningIcon'/>
      )}
        <p className='paragraph2'>{props.content}</p>
    </div>
  )
}

export default Message