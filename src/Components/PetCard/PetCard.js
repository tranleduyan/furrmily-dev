//#region Import Component
import React from 'react'
import PetMemberCard from '../PetMemberCard/PetMemberCard';
import { Converters } from '../../Global/Helpers';
//#endregion

//#region Import Stylings
import '../../Styles/Components/PetCard/PetCard.css'
//#endregion

//#region Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
//#endregion

function PetCard(props) {

  //#region Variables

  const petAge = `Age: ${props.petAge} years old`;
  const petType = `Type: ${Converters.CapitalConverter(props.petType)}`;
  const petBreed = `Breed: ${Converters.CapitalConverter(props.petBreed)}`;
  const extraMemberAmount = `0`;
  const lastPetMemberCardClassName = (extraMemberAmount > 0) ? `flexColumnCenter lastPetMemberCard` : `hidden`

  //#endregion
  return (
    <div className='petCard' onClick={()=>{console.log('petcard')}}>
        {(props.petAvatar && props.petAvatar !== 'x') && ( 
          <>
            <img src={props.petAvatar} alt='Pet Avatar' className='petAvatar'/>
          </>
        )}

        {(!props.petAvatar || props.petAvatar === 'x') && (
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
            <PetMemberCard avatar={props.ownerAvatar}/>
            <div className={lastPetMemberCardClassName}>
              <h4 className='heading4'>{`+ ${extraMemberAmount}`}</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PetCard