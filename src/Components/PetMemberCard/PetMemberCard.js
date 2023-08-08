/* Components */
import React from 'react'
import { Helpers } from '../../Global/Helpers'

/* Stylings */
import '../../Styles/Components/PetMemberCard/PetMemberCard.css'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PetMemberCard(props) {

  return (
    <div className='flexColumnCenter petMemberCard'>
        <FontAwesomeIcon icon={Helpers.GetAvatarIcon(props.avatar)}/>
    </div>
  )
}

export default PetMemberCard