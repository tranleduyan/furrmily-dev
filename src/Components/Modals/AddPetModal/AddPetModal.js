/* Components */
import React from 'react'
import GeneralModal from '../GeneralModal/GeneralModal'
import StandardButton from '../../Buttons/StandardButton/StandardButton'
import StandardInputField from '../../InputFields/StandardInputField'
import IconButton from '../../Buttons/IconButton/IconButton'
import TextAreaInputField from '../../InputFields/TextAreaInputField/TextAreaInputField'
import StandardDropDown from '../../Dropdowns/StandardDropDown/StandardDropDown'
import { OPTIONS_DATA } from '../../../Global/Constants'

/* Stylings */
import '../../../Styles/Components/Modals/AddPetModal.css'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'


function AddPetModal({open, OnClose}) {

  return (
    <GeneralModal open={open}>
      <div className='flexRowCenter AddPetModal-container'>

        {/* Left Panel */}
        <div className='AddPetModal-leftContentPanel'>
          <h1 className='heading1'>
            Add Pet
          </h1>
          <div className='flexRowCenter AddPetModal-addPetAvatarContainer'>
            <IconButton className='AddPetModal-addPetAvatarButton' icon={<FontAwesomeIcon icon={faImage}/>}/>
          </div>
          <div className='AddPetModal-leftInputGroupContainer'>

            {/* Pet Name input field */}
            <StandardInputField className='AddPetModal-inputFieldContainer' 
                                inputClassName='' 
                                htmlFor='petName' 
                                id='petName' 
                                name='petName' 
                                type='text' 
                                title='Name' 
                                onChange={()=>{}} />
            {/* Drop Down Group */}
            <div className='AddPetModal-dropDownGroup'>

              {/* Pet Date of Birth Drop Downs Group */}
              <div className='flexRowCenter'>

                {/* Month DropDown */}
                <StandardDropDown className='AddPetModal-petMonthOfBirthDropDownContainer' 
                                  htmlFor='petDateOfBirth' 
                                  id='petDateOfBirth' 
                                  name='petDateOfBirth' 
                                  title='Birth Date' 
                                  placeholder='MM' 
                                  options={OPTIONS_DATA.monthOptions} 
                                  onChange={()=>{}}/>

                {/* Date DropDown */}
                <StandardDropDown className='AddPetModal-petDateOfBirthDropDownContainer' 
                                  htmlFor='petDateOfBirth' 
                                  id='petDateOfBirth' 
                                  name='petDateOfBirth' 
                                  title='' 
                                  placeholder='DD' 
                                  options={OPTIONS_DATA.dateOptions} 
                                  onChange={()=>{}}/>

                {/* Year DropDown */}
                <StandardDropDown className='AddPetModal-petYearOfBirthDropDownContainer' 
                                  inputClassName='AddPetModal-petYearOfBirthDropDown' 
                                  htmlFor='petDateOfBirth' 
                                  id='petYearOfBirth' 
                                  name='petDateOfBirth' 
                                  title='' 
                                  placeholder='YYYY' 
                                  options={OPTIONS_DATA.yearOptions} 
                                  onChange={()=>{}}/>
              </div>

              {/* Gender DropDown */}
              <StandardDropDown className='AddPetModal-petGenderDropDownContainer' 
                                htmlFor='petGender' 
                                id='petGender' 
                                name='petGender' 
                                title='Gender' 
                                placeholder=' ' 
                                options={OPTIONS_DATA.genderOptions} 
                                onChange={()=>{}}/>
            </div>
            {/* Pet Type input field */}
            <StandardInputField className='AddPetModal-inputFieldContainer' 
                                inputClassName='' 
                                htmlFor='petType' 
                                id='petType' 
                                name='petType' 
                                type='text' 
                                title='Type' 
                                onChange={()=>{}} />
            {/* Pet Breed input field */}
            <StandardInputField className='AddPetModal-lastLeftInputFieldContainer' 
                                inputClassName='' 
                                htmlFor='petBreed' 
                                id='petBreed' 
                                name='petBreed' 
                                type='text' 
                                title='Breed' 
                                onChange={()=>{}} />
          </div>

          {/* Buttons */}
          <div className='AddPetModal-leftButtonGroupContainer flexRowCenter'>
            <StandardButton className='AddPetModal-addButton' type='Primary' title='ADD' onClick={()=>{}}/>
            <StandardButton className='AddPetModal-cancelButton' type='Secondary' title='CANCEL' onClick={()=>{}}/>
          </div>
        </div>

        {/* Right Panel */}
        <div className='AddPetModal-rightContentPanel'>
          <div className='AddPetModal-rightInputGroupContainer'>

            {/* Pet About Text Area Input Field */}
            <TextAreaInputField className='AddPetModal-inputFieldContainer' 
                                inputClassName='AddPetModal-aboutInputField' 
                                htmlFor='petAbout' 
                                id='petAbout'             
                                name='petAbout' 
                                type='text' 
                                title='About' 
                                onChange={()=>{}} />

            {/* Pet Weight Input Field */}
            <StandardInputField className='AddPetModal-inputFieldContainer' 
                                inputClassName='' 
                                htmlFor='petWeight' 
                                id='petWeight' 
                                name='petWeight' 
                                type='text' 
                                title='Weight (lbs)' 
                                onChange={()=>{}} />

            {/* Pet Address Line 1 input field */}
            <StandardInputField className='AddPetModal-inputFieldContainer' 
                                inputClassName='' 
                                htmlFor='petAddressLine1' 
                                id='petAddressLine1' 
                                name='petAddressLine1' 
                                type='text'
                                title='Address Line 1' 
                                onChange={()=>{}} />

              {/* Pet Address Line 2 input field */}
            <StandardInputField className='AddPetModal-inputFieldContainer' 
                                inputClassName='' 
                                htmlFor='petAddressLine2' 
                                id='petAddressLine2' 
                                name='petAddressLine2' 
                                type='text' 
                                title='Address Line 2 (Optional)' 
                                onChange={()=>{}} />
            
            {/* City State Input Group */}
            <div className='AddPetModal-CityStateGroup'>

              {/* City - Left */}
              <StandardInputField className='AddPetModal-leftGroupInputFieldContainer' 
                                  inputClassName='' 
                                  htmlFor='petCity' 
                                  id='petCity' 
                                  name='petCity' 
                                  type='text' 
                                  title='City' 
                                  onChange={()=>{}} />

              {/* State DropDown - Right */}
              <StandardDropDown className='AddPetModal-rightGroupInputFieldContainer' 
                                htmlFor='petState' 
                                id='petState' 
                                name='petState' 
                                title='State' 
                                placeholder=' ' 
                                options={OPTIONS_DATA.stateOptions} 
                                onChange={()=>{}}/>
            </div>

            {/* ZipCode Group */}
            <div className='AddPetModal-ZipCodeGroup'>
              
              {/* ZipCode Input Field- Left */}
              <StandardInputField className='AddPetModal-leftGroupInputFieldContainer' 
                                  inputClassName='' 
                                  htmlFor='petZipCode' 
                                  id='petZipCode'
                                  name='petZipCode' 
                                  type='text'
                                  title='Zip Code' 
                                  onChange={()=>{}} />

              {/* ZipCode 4 Input Field - Right */}
              <StandardInputField className='AddPetModal-rightGroupInputFieldContainer' 
                                  inputClassName='' 
                                  htmlFor='petZipCode4' 
                                  id='petZipCode4'             
                                  name='petZipCode4' 
                                  type='text' 
                                  title={''} 
                                  onChange={()=>{}} />
            </div>
          </div>
        </div>
      </div>
    </GeneralModal>
  )
}

export default AddPetModal