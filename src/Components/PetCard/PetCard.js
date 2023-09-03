//#region Import Component
import React from 'react'
import PetMemberCard from '../PetMemberCard/PetMemberCard';
import { Converters, Helpers } from '../../Global/Helpers';
import IconButton from '../Buttons/IconButton';
//#endregion

//#region Import Stylings
import '../../Styles/Components/PetCard/PetCard.css'
//#endregion

//#region Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faXmark } from '@fortawesome/free-solid-svg-icons';
//#endregion

function PetCard(props) {

  //#region Variables
  const age = Helpers.CalculateAge(props.dateOfBirth);
  const petAge = `Age: ${age} years old`;
  const petType = `Type: ${Converters.CapitalConverter(props.type)}`;
  const petBreed = `Breed: ${Converters.CapitalConverter(props.breed)}`;
  const extraMemberAmount = `0`;

  const lastPetMemberCardClassName = (extraMemberAmount > 0) ? `flexColumnCenter lastPetMemberCard` : `hidden`
  const className = props.id === props.selectedPetId ? 'petCard petCardActive' : 'petCard';

  const petDetails = {
    id: props.id,
    name: props.name,
    avatar: props.avatar,
    dateOfBirth: props.dateOfBirth,
    age: age,
    type: props.type,
    breed: props.breed,
    gender: props.gender,
    weight: props.weight,
    physicalAddress1: props.physicalAddress1,
    physicalAddress2: props.physicalAddress2,
    addressCity: props.addressCity,
    addressState: props.addressState,
    addressZip4: props.addressZip4,
    addressZip5: props.addressZip5,
    about: props.about,
    profileMembers: props.profileMembers,
    ownerAvatar: props.ownerAvatar,
  }

  //#endregion

  //#region Functions

  //OnCardClicked - perform the action when the card is clicked
  const OnCardClicked = () => {
    // If it does have parameter, provide the petDetails
    if (props.onClick.length) {
      props.onClick(petDetails);
    } 
    // Otherwise, just invoke the function
    else {
      props.onClick();
    }
  }

  //OnDeleteClicked - Delete the pet profile upon clicking
  const OnDeleteClicked = (e) => {
    e.stopPropagation(); // Stop event propagation
    console.log("TODO: Remove pet profile!");
  }

  //#endregion

  return (
    <div className={className} onClick={OnCardClicked}>
        {(props.avatar && props.avatar !== 'x') && ( 
          <>
            <img src={props.avatar} alt='Pet Avatar' className='petAvatar'/>
          </>
        )}

        {(!props.avatar || props.avatar === 'x') && (
          <>
            <div className='flexColumnCenter petAvatarPlaceholder'>
              <FontAwesomeIcon icon={faPaw}/>
            </div>
          </>
        )}

      <div className='petInformationContainer'>
        <h2 className='heading2'>{props.name}</h2>
          <p className='paragraph2'>{petAge}</p>
          <p className='paragraph2'>{petType}</p>
          <p className='paragraph2'>{petBreed}</p>
      </div>
      <div className='petMemberContainer'>
        <div className='PetCard-deleteButtonContainer'>
            <IconButton
                      className="flexRowCenter PetCard-deleteButton"
                      icon={<FontAwesomeIcon icon={faXmark} />}
                      onClick={OnDeleteClicked}
                    />
          </div>
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