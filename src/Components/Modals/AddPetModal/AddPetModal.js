import React from 'react'
import GeneralModal from '../GeneralModal/GeneralModal'
import StandardButton from '../../Buttons/StandardButton/StandardButton'
import StandardInputField from '../../InputFields/StandardInputField'
import IconButton from '../../Buttons/IconButton/IconButton'
import UITEXT from '../../../Global/Constants'

import '../../../Styles/Components/Modals/AddPetModal.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { Converters } from '../../../Global/Helpers'
import TextAreaInputField from '../../InputFields/TextAreaInputField/TextAreaInputField'

function AddPetModal({open, OnClose}) {
  return (
    <GeneralModal open={open}>
      <div className='flexRowCenter AddPetModal-container'>
          <div className='AddPetModal-leftContentPanel'>
            <h1 className='heading1'>
              Add Pet
            </h1>
            <div className='flexRowCenter AddPetModal-addPetAvatarContainer'>
              <IconButton className='AddPetModal-addPetAvatarButton' icon={<FontAwesomeIcon icon={faImage}/>}/>
            </div>
            <div className='AddPetModal-leftInputGroupContainer'>
              {/* Pet Name input field */}
              <StandardInputField className='AddPetModal-inputFieldContainer' inputClassName='' htmlFor='petName' id='petName' name='petName' 
                                  type='text' title={UITEXT.NAME_TEXT} 
                                  onChange={()=>{}} />
              {/* Pet Name input field */}
              <StandardInputField className='AddPetModal-inputFieldContainer' inputClassName='' htmlFor='petName' id='petName' name='petName' 
                                  type='text' title={UITEXT.NAME_TEXT} 
                                  onChange={()=>{}} />
              {/* Pet Type input field */}
              <StandardInputField className='AddPetModal-inputFieldContainer' inputClassName='' htmlFor='petType' id='petType' name='petType' 
                                  type='text' title={UITEXT.TYPE_TEXT} 
                                  onChange={()=>{}} />
              {/* Pet Breed input field */}
              <StandardInputField className='AddPetModal-lastLeftInputFieldContainer' inputClassName='' htmlFor='petBreed' id='petBreed' name='petBreed' 
                                  type='text' title={UITEXT.BREED_TEXT} 
                                  onChange={()=>{}} />
            </div>
            <div className='AddPetModal-leftButtonGroupContainer flexRowCenter'>
              <StandardButton className='AddPetModal-addButton' buttonSize='large' title={Converters.UpperCaseConverter(UITEXT.ADD_TEXT)} onClick={()=>{}}/>
              <StandardButton className='AddPetModal-cancelButton' buttonSize='large' title={Converters.UpperCaseConverter(UITEXT.CANCEL_TEXT)} onClick={()=>{}}/>
            </div>
          </div>
          <div className='AddPetModal-rightContentPanel'>
            <div className='AddPetModal-rightInputGroupContainer'>
              {/* Pet About input field */}
              <TextAreaInputField className='AddPetModal-inputFieldContainer' inputClassName='AddPetModal-aboutInputField' htmlFor='petAbout' id='petAbout'             
                                  name='petAbout' 
                                  type='text' title={UITEXT.ABOUT_TEXT} 
                                  onChange={()=>{}} />
              {/* Pet Weight input field */}
              <StandardInputField className='AddPetModal-inputFieldContainer' inputClassName='' htmlFor='petWeight' id='petWeight' name='petWeight' 
                                  type='text' title={`${UITEXT.WEIGHT_TEXT} (lbs)`} 
                                  onChange={()=>{}} />
              {/* Pet Address Line 1 input field */}
              <StandardInputField className='AddPetModal-inputFieldContainer' inputClassName='' htmlFor='petAddressLine1' id='petAddressLine1' name='petAddressLine1' 
                                  type='text' title={UITEXT.ADDRESS_LINE_1_TEXT} 
                                  onChange={()=>{}} />
               {/* Pet Address Line 2 input field */}
              <StandardInputField className='AddPetModal-inputFieldContainer' inputClassName='' htmlFor='petAddressLine2' id='petAddressLine2' name='petAddressLine2' 
                                  type='text' title={`${UITEXT.ADDRESS_LINE_2_TEXT} (${UITEXT.OPTIONAL_TEXT})`} 
                                  onChange={()=>{}} />
              <StandardInputField className='AddPetModal-inputFieldContainer' inputClassName='' htmlFor='petName' id='petName' name='petName' 
                                  type='text' title={UITEXT.NAME_TEXT} 
                                  onChange={()=>{}} />
              {/* Pet Name input field */}
              <StandardInputField className='AddPetModal-lastRightInputFieldContainer' inputClassName='' htmlFor='petName' id='petName' name='petName' 
                                  type='text' title={UITEXT.NAME_TEXT} 
                                  onChange={()=>{}} />
            </div>
          </div>
      </div>
    </GeneralModal>
  )
}

export default AddPetModal