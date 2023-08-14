//#region Import Components
import React, { useState } from 'react'
import axios from 'axios'
import GeneralModal from '../GeneralModal/GeneralModal'
import StandardButton from '../../Buttons/StandardButton/StandardButton'
import StandardInputField from '../../InputFields/StandardInputField'
import IconButton from '../../Buttons/IconButton/IconButton'
import TextAreaInputField from '../../InputFields/TextAreaInputField/TextAreaInputField'
import StandardDropDown from '../../Dropdowns/StandardDropDown/StandardDropDown'
import { API, OPTIONS_DATA } from '../../../Global/Constants'
import { connect } from 'react-redux'
import { Converters } from '../../../Global/Helpers'
//#endregion

//#region Import Stylings
import '../../../Styles/Components/Modals/AddPetModal.css'
//#endregion


//#region Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
//#endregion

function AddPetModal({open, OnClose, petTypes, petBreeds, userData}) {

  //#region Variables

  /* Error Handler Variables */
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);

  /* petInformation for input gathering - used for OnAddPetProfile and are updated using HandleInputChange */
  const [petInformation, setPetInformation] = useState({
    petName:'',
    petPhoto:'x',
    petBirthMonth: '',
    petBirthDay: '',
    petBirthYear: '',
    petType: '',
    petBreed: '',
    petGender: '',
    petWeight: '',
    physicalAddress1: '',
    physicalAddress2: '',
    addressCity: '',
    addressState: '',
    addressZip4: '',
    addressZip5: '',
    description: '',
  });

  /* requestBody for API upon adding */

  const requestBody = {
    userId: userData.userId,
    petName: petInformation.petName,
    petPhoto: 'x', //TODO: FutureSprint allows upload photo
    petDateOfBirth: Converters.DateTimeConverter(`${petInformation.petBirthYear}-${petInformation.petBirthMonth}-${petInformation.petBirthDay}`),
    petType: petInformation.petType,
    petBreed: petInformation.petBreed,
    petGender: petInformation.petGender,
    petWeight: petInformation.petWeight,
    physicalAddress1: petInformation.physicalAddress1,
    physicalAddress2: petInformation.physicalAddress2,
    addressCity: petInformation.addressCity,
    addressState: petInformation.addressState,
    addressZip4: petInformation.addressZip4,
    addressZip5: petInformation.addressZip5,
    description: petInformation.description,
  }

  //#endregion

  //#region Functions

  /* HandleInputChange - takes the propertyName of the input to updateuserInformation object with the input value */
  const HandleInputChange = (propertyName, inputValue) => {
    if(isError) {
      setIsError(false);
      setErrorMessage('');
    }
    setPetInformation({...petInformation, [propertyName]: inputValue});
  }

  /* OnAddPetProfile - TODO: Add Pet Profile using all the input information */
  const OnAddPetProfile = () => {
    console.log(requestBody);
    axios
      .post(API.addPetURL, requestBody, {
        headers: {
          'X-API-KEY': API.key,
        }
      })
      .then(response => {
        window.location.reload();  // Refresh Page
      })
      .catch(error => {
        console.log(error);
      });
  }

  //#endregion

  //#region Options for Dropdowns

  /* PetTypeOptions */
  const petTypeOptions = petTypes ? petTypes.map(type => ({
    value: type.petTypeCode,
    label: Converters.CapitalConverter(type.petTypeDescription),
  })) : [];

  /* PetBreedOptions */
  const petBreedOptions = petBreeds ? petBreeds.map(breed => ({
    value: breed.breedName,
    label: breed.breedName,
  })) : [];

  //#endregion

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
                                onChange={HandleInputChange} />
            {/* Drop Down Group */}
            <div className='AddPetModal-dropDownGroup'>

              {/* Pet Date of Birth Drop Downs Group */}
              <div className='flexRowCenter'>

                {/* Month DropDown */}
                <StandardDropDown className='AddPetModal-petMonthOfBirthDropDownContainer' 
                                  htmlFor='petBirthMonth' 
                                  id='petBirthMonth' 
                                  name='petBirthMonth' 
                                  title='Birth Date' 
                                  placeholder='MM' 
                                  options={OPTIONS_DATA.monthOptions} 
                                  onChange={HandleInputChange}/>

                {/* Date DropDown */}
                <StandardDropDown className='AddPetModal-petDateOfBirthDropDownContainer' 
                                  htmlFor='petBirthDay' 
                                  id='petBirthDay' 
                                  name='petBirthDay' 
                                  title='' 
                                  placeholder='DD' 
                                  options={OPTIONS_DATA.dateOptions} 
                                  onChange={HandleInputChange}/>

                {/* Year DropDown */}
                <StandardDropDown className='AddPetModal-petYearOfBirthDropDownContainer' 
                                  inputClassName='AddPetModal-petYearOfBirthDropDown' 
                                  htmlFor='petBirthYear' 
                                  id='petBirthYear' 
                                  name='petBirthYear' 
                                  title='' 
                                  placeholder='YYYY' 
                                  options={OPTIONS_DATA.yearOptions} 
                                  onChange={HandleInputChange}/>
              </div>

              {/* Pet Gender DropDown */}
              <StandardDropDown className='AddPetModal-petGenderDropDownContainer' 
                                htmlFor='petGender' 
                                id='petGender' 
                                name='petGender' 
                                title='Gender' 
                                placeholder='M/F' 
                                options={OPTIONS_DATA.genderOptions} 
                                onChange={HandleInputChange}/>
            </div>
            {/* Pet Type Drop Down */}
            <StandardDropDown className='AddPetModal-inputFieldContainer' 
                                htmlFor='petType' 
                                id='petType' 
                                name='petType' 
                                title='Type' 
                                options={petTypeOptions} 
                                onChange={HandleInputChange} />
            {/* Pet Breed input field */}
            <StandardDropDown className='AddPetModal-lastLeftInputFieldContainer' 
                                htmlFor='petBreed' 
                                id='petBreed' 
                                name='petBreed' 
                                title='Breed' 
                                options={petBreedOptions} 
                                onChange={HandleInputChange} />
          </div>

          {/* Buttons */}
          <div className='AddPetModal-leftButtonGroupContainer flexRowCenter'>
            <StandardButton className='AddPetModal-addButton' type='Primary' title='ADD' onClick={OnAddPetProfile}/>
            <StandardButton className='AddPetModal-cancelButton' type='Secondary' title='CANCEL' onClick={OnClose}/>
          </div>
        </div>

        {/* Right Panel */}
        <div className='AddPetModal-rightContentPanel'>
          <div className='AddPetModal-rightInputGroupContainer'>

            {/* Pet About Text Area Input Field */}
            <TextAreaInputField className='AddPetModal-inputFieldContainer' 
                                inputClassName='AddPetModal-aboutInputField' 
                                htmlFor='description' 
                                id='description'             
                                name='description' 
                                type='text' 
                                title='About' 
                                onChange={HandleInputChange} />

            {/* Pet Weight Input Field */}
            <StandardInputField className='AddPetModal-inputFieldContainer' 
                                inputClassName='' 
                                htmlFor='petWeight' 
                                id='petWeight' 
                                name='petWeight' 
                                type='text' 
                                title='Weight (lbs)' 
                                onChange={HandleInputChange} />

            {/* Pet Address Line 1 input field */}
            <StandardInputField className='AddPetModal-inputFieldContainer' 
                                inputClassName='' 
                                htmlFor='physicalAddress1' 
                                id='physicalAddress1' 
                                name='physicalAddress1' 
                                type='text'
                                title='Address Line 1' 
                                onChange={HandleInputChange} />

              {/* Pet Address Line 2 input field */}
            <StandardInputField className='AddPetModal-inputFieldContainer' 
                                inputClassName='' 
                                htmlFor='physicalAddress2' 
                                id='physicalAddress2' 
                                name='physicalAddress2' 
                                type='text' 
                                title='Address Line 2 (Optional)' 
                                onChange={HandleInputChange} />
            
            {/* City State Input Group */}
            <div className='AddPetModal-CityStateGroup'>

              {/* City - Left */}
              <StandardInputField className='AddPetModal-leftGroupInputFieldContainer' 
                                  inputClassName='' 
                                  htmlFor='addressCity' 
                                  id='addressCity' 
                                  name='addressCity' 
                                  type='text' 
                                  title='City' 
                                  onChange={HandleInputChange} />

              {/* State DropDown - Right */}
              <StandardDropDown className='AddPetModal-rightGroupInputFieldContainer' 
                                htmlFor='addressState' 
                                id='addressState' 
                                name='addressState' 
                                title='State' 
                                placeholder=' ' 
                                options={OPTIONS_DATA.stateOptions} 
                                onChange={HandleInputChange}/>
            </div>

            {/* ZipCode Group */}
            <div className='AddPetModal-ZipCodeGroup'>
              
              {/* ZipCode Input Field- Left */}
              <StandardInputField className='AddPetModal-leftGroupInputFieldContainer' 
                                  inputClassName='' 
                                  htmlFor='addressZip5' 
                                  id='addressZip5'
                                  name='addressZip5' 
                                  type='text'
                                  title='Zip Code' 
                                  onChange={HandleInputChange} />
              <p className='heading2 AddPetModal-zipcodeDash'> - </p>
              {/* ZipCode 4 Input Field - Right */}
              <StandardInputField className='AddPetModal-rightGroupInputFieldContainer' 
                                  inputClassName='' 
                                  htmlFor='addressZip4' 
                                  id='addressZip4'             
                                  name='addressZip4' 
                                  type='text' 
                                  title={''} 
                                  onChange={HandleInputChange} />
            </div>
          </div>
        </div>
      </div>
    </GeneralModal>
  )
}

const mapStateToProps = state => ({
  petTypes: state.options.petTypes,
  petBreeds: state.options.petBreeds,
  userData: state.user.userData,
});

export default connect(mapStateToProps)(AddPetModal);