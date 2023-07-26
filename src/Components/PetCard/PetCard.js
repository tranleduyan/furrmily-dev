/* Components */
import React from 'react'
import PetMemberCard from '../PetMemberCard/PetMemberCard';

/* Stylings */
import '../../Styles/Components/PetCard/PetCard.css'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

function PetCard(props) {
  const petAge = `Age: ${props.petAge} years old`;
  const petType = `Type: ${props.petType}`;
  const petBreed = `Breed: ${props.petBreed}`;
  const extraMemberAmount = `+${props.extraMemberAmount}`;
  const lastPetMemberCardClassName = (extraMemberAmount > 0) ? `flexColumnCenter lastPetMemberCard` : `hidden`
  return (
    <div className='petCard'>
        {(props.petAvatar && props.petAvatar !== 'X') && ( 
          <>
            <img src={props.petAvatar} alt='Pet Avatar' className='petAvatar'/>
          </>
        )}

        {(!props.petAvatar || props.petAvatar === 'X') && (
          <>
            <div className='flexColumnCenter petAvatarPlaceholder'>
              <FontAwesomeIcon icon={faPaw}/>
            </div>
          </>
        )}

      <div className='petInformationContainer'>
        <h2 className='heading2'>{props.petName}</h2>
          <p className='paragraph2'>{petAge}</p>
          <p className='paragraph2'>{petType}</p>
          <p className='paragraph2'>{petBreed}</p>
      </div>
      <div className='petMemberContainer'>
        <div className='petMemberList'>
            <PetMemberCard avatar={props.member1Avatar}/>
            <PetMemberCard avatar={props.member2Avatar}/>
            <div className={lastPetMemberCardClassName}>
              <h4 className='heading4'>{extraMemberAmount}</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PetCard