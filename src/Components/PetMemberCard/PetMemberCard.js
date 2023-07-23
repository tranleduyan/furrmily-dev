/* Components */
import React from 'react'

/* Stylings */
import '../../Styles/Components/PetMemberCard/PetMemberCard.css'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PetMemberCard(props) {
  return (
    <div className='flexColumnCenter petMemberCard'>
        <FontAwesomeIcon icon={props.avatar}/>
    </div>
  )
}

export default PetMemberCard