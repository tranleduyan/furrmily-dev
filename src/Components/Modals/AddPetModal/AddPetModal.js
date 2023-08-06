import React from 'react'
import GeneralModal from '../GeneralModal/GeneralModal'
import StandardButton from '../../Buttons/StandardButton/StandardButton'
import StandardInputField from '../../InputFields/StandardInputField'
import IconButton from '../../Buttons/IconButton/IconButton'
import {OPTIONS_DATA, UITEXT} from '../../../Global/Constants'

import '../../../Styles/Components/Modals/AddPetModal.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { Converters } from '../../../Global/Helpers'
import TextAreaInputField from '../../InputFields/TextAreaInputField/TextAreaInputField'
import StandardDropDown from '../../Dropdowns/StandardDropDown/StandardDropDown'

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
              <div className='AddPetModal-dropDownGroup'>
                <div className='flexRowCenter'>
                  <StandardDropDown className='AddPetModal-petMonthOfBirthDropDownContainer' htmlFor='petDateOfBirth' id='petDateOfBirth' name='petDateOfBirth' title={UITEXT.DOB_TEXT} placeholder='MM' options={OPTIONS_DATA.monthOptions} onChange={()=>{}}/>
                  <StandardDropDown className='AddPetModal-petDateOfBirthDropDownContainer' htmlFor='petDateOfBirth' id='petDateOfBirth' name='petDateOfBirth' title={''} placeholder='DD' options={OPTIONS_DATA.dateOptions} onChange={()=>{}}/>
                  <StandardDropDown className='AddPetModal-petYearOfBirthDropDownContainer' inputClassName='AddPetModal-petYearOfBirthDropDown' htmlFor='petDateOfBirth' id='petYearOfBirth' name='petDateOfBirth' title={''} placeholder='YYYY' options={OPTIONS_DATA.yearOptions} onChange={()=>{}}/>
                </div>
                <StandardDropDown className='AddPetModal-petGenderDropDownContainer' htmlFor='petGender' id='petGender' name='petGender' title={'Gender'} placeholder=' ' options={OPTIONS_DATA.genderOptions} onChange={()=>{}}/>

              </div>
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
              <div className='AddPetModal-CityStateGroup'>
                <StandardInputField className='AddPetModal-leftGroupInputFieldContainer' inputClassName='' htmlFor='petCity' id='petCity' name='petCity' 
                                    type='text' title={UITEXT.CITY_TEXT} 
                                    onChange={()=>{}} />
                <StandardDropDown className='AddPetModal-rightGroupInputFieldContainer' htmlFor='petState' id='petState' name='petState' title={UITEXT.STATE_TEXT} placeholder=' ' options={OPTIONS_DATA.stateOptions} onChange={()=>{}}/>
              </div>

              <div className='AddPetModal-CityStateGroup'>
                <StandardInputField className='AddPetModal-leftGroupInputFieldContainer' inputClassName='' htmlFor='petZipCode' id='petZipCode'             name='petZipCode' 
                                    type='text' title={UITEXT.ZIP_CODE_TEXT} 
                                    onChange={()=>{}} />
                <StandardInputField className='AddPetModal-rightGroupInputFieldContainer' inputClassName='' htmlFor='petZipCode4' id='petZipCode4'             name='petZipCode4' 
                                    type='text' title={''} 
                                    onChange={()=>{}} />
              </div>
            </div>
          </div>
      </div>
    </GeneralModal>
  )
}

export default AddPetModal