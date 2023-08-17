//#region Import Components
import React, { useState } from 'react'
import axios from 'axios'
import GeneralModal from '../GeneralModal/GeneralModal'
import StandardButton from '../../Buttons/StandardButton/StandardButton'
import StandardInputField from '../../InputFields/StandardInputField'
import IconButton from '../../Buttons/IconButton/IconButton'
import TextAreaInputField from '../../InputFields/TextAreaInputField/TextAreaInputField'
import StandardDropDown from '../../Dropdowns/StandardDropDown/StandardDropDown'
import { API, OPTIONS_DATA, UITEXT } from '../../../Global/Constants'
import { connect } from 'react-redux'
import { Converters } from '../../../Global/Helpers'
//#endregion

//#region Import Stylings
import '../../../Styles/Components/Modals/AddPetModal.css'
//#endregion


//#region Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import Message from '../../Message/Message'
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

  /* HandleInputChange - takes the propertyName of the input to update petInformation object with the input value */
  const HandleInputChange = (propertyName, inputValue) => {
    if(isError) {
      setIsError(false);
      setErrorMessage('');
    }
    setPetInformation({...petInformation, [propertyName]: inputValue});
  }

  /* IsValid - Check for required fields */
  const IsValid = () => {
    if(!petInformation.petName 
       || !petInformation.petBirthMonth 
       || !petInformation.petBirthDay 
       || !petInformation.petBirthYear 
       || !petInformation.petType 
       || !petInformation.petBreed 
       || !petInformation.petGender 
       || !petInformation.physicalAddress1 
       || !petInformation.addressCity 
       || !petInformation.addressState 
       || !petInformation.addressZip5){
        setIsError(true);
        setErrorMessage(UITEXT.EMPTY_FIELD_ERROR);
        return false;
       }

    if(petInformation.petName.length > 15){
      setIsError(true);
      setErrorMessage(UITEXT.LONG_PETNAME_ERROR);
      return false;
    }

    /* Check for valid weight */   
    const weightRefex = /^\d+$/;
    if(!weightRefex.test(petInformation.petWeight)){
      setIsError(true);
      setErrorMessage(UITEXT.INVALID_WEIGHT_ERROR);
      return false;
    }

    /* Check for valid zip code 5 */
    const zipCode5Regex = /^\d{5}$/;
    if(!zipCode5Regex.test(petInformation.addressZip5)){
      setIsError(true);
      setErrorMessage(UITEXT.INVALID_ZIPCODE5_ERROR);
      return false;
    }
    return true;
  }

  /* OnAddPetProfile - Add Pet Profile using all the input information and then reload page*/
  const OnAddPetProfile = () => {
    if(!IsValid()){
      return;
    }
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

  /* OnCloseModal - if there is error, set error to false and clear error message, close the modal. */
  const OnCloseModal = () => {
    if(isError) {
      setIsError(false);
      setErrorMessage('');
    }
    OnClose();
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
    label: Converters.CapitalConverter(breed.breedName),
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
                                onChange={HandleInputChange}
                                error={isError}
                                />
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
                                  onChange={HandleInputChange}
                                  error={isError}/>

                {/* Date DropDown */}
                <StandardDropDown className='AddPetModal-petDateOfBirthDropDownContainer' 
                                  htmlFor='petBirthDay' 
                                  id='petBirthDay' 
                                  name='petBirthDay' 
                                  title='' 
                                  placeholder='DD' 
                                  options={OPTIONS_DATA.dateOptions} 
                                  onChange={HandleInputChange}
                                  error={isError}/>

                {/* Year DropDown */}
                <StandardDropDown className='AddPetModal-petYearOfBirthDropDownContainer' 
                                  inputClassName='AddPetModal-petYearOfBirthDropDown' 
                                  htmlFor='petBirthYear' 
                                  id='petBirthYear' 
                                  name='petBirthYear' 
                                  title='' 
                                  placeholder='YYYY' 
                                  options={OPTIONS_DATA.yearOptions} 
                                  onChange={HandleInputChange}
                                  error={isError}/>
              </div>

              {/* Pet Gender DropDown */}
              <StandardDropDown className='AddPetModal-petGenderDropDownContainer' 
                                htmlFor='petGender' 
                                id='petGender' 
                                name='petGender' 
                                title='Gender' 
                                placeholder='M/F' 
                                options={OPTIONS_DATA.genderOptions} 
                                onChange={HandleInputChange}
                                error={isError}/>
            </div>
            {/* Pet Type Drop Down */}
            <StandardDropDown className='AddPetModal-inputFieldContainer' 
                                htmlFor='petType' 
                                id='petType' 
                                name='petType' 
                                title='Type' 
                                options={petTypeOptions} 
                                onChange={HandleInputChange}
                                error={isError}/>
            {/* Pet Breed input field */}
            <StandardDropDown className='AddPetModal-lastLeftInputFieldContainer' 
                                htmlFor='petBreed' 
                                id='petBreed' 
                                name='petBreed' 
                                title='Breed' 
                                options={petBreedOptions} 
                                onChange={HandleInputChange}
                                error={isError}/>
          </div>
          <Message className='' messageType='error' visibility={isError} content={errorMessage}/>
          {/* Buttons */}
          <div className='AddPetModal-leftButtonGroupContainer flexRowCenter'>
            <StandardButton className='AddPetModal-addButton' type='Primary' title='ADD' onClick={OnAddPetProfile}/>
            <StandardButton className='AddPetModal-cancelButton' type='Secondary' title='CANCEL' onClick={OnCloseModal}/>
          </div>
        </div>

        {/* Right Panel */}
        <div className='AddPetModal-rightContentPanel'>
          <div className='AddPetModal-rightInputGroupContainer'>

            {/* Pet About Text Area Input Field */}
            <TextAreaInputField className='AddPetModal-firstRightInputFieldContainer' 
                                inputClassName='AddPetModal-aboutInputField' 
                                htmlFor='description' 
                                id='description'             
                                name='description' 
                                type='text' 
                                title='About' 
                                onChange={HandleInputChange}
                                error={isError}/>

            {/* Pet Weight Input Field */}
            <StandardInputField className='AddPetModal-inputFieldContainer' 
                                inputClassName='' 
                                htmlFor='petWeight' 
                                id='petWeight' 
                                name='petWeight' 
                                type='text' 
                                title='Weight (Optional - lbs)' 
                                onChange={HandleInputChange}
                                />

            {/* Pet Address Line 1 input field */}
            <StandardInputField className='AddPetModal-inputFieldContainer' 
                                inputClassName='' 
                                htmlFor='physicalAddress1' 
                                id='physicalAddress1' 
                                name='physicalAddress1' 
                                type='text'
                                title='Address Line 1' 
                                onChange={HandleInputChange}
                                error={isError}
                                maxLength={255}/>

              {/* Pet Address Line 2 input field */}
            <StandardInputField className='AddPetModal-inputFieldContainer' 
                                inputClassName='' 
                                htmlFor='physicalAddress2' 
                                id='physicalAddress2' 
                                name='physicalAddress2' 
                                type='text' 
                                title='Address Line 2 (Optional)' 
                                onChange={HandleInputChange} 
                                maxLength={255}/>
            
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
                                  onChange={HandleInputChange} 
                                  error={isError}
                                  maxLength={255}/>

              {/* State DropDown - Right */}
              <StandardDropDown className='AddPetModal-rightGroupInputFieldContainer' 
                                htmlFor='addressState' 
                                id='addressState' 
                                name='addressState' 
                                title='State' 
                                placeholder=' ' 
                                options={OPTIONS_DATA.stateOptions} 
                                onChange={HandleInputChange}
                                error={isError}/>
            </div>
      
              {/* ZipCode Input Field- Left */}
              <StandardInputField className='AddPetModal-lastRightInputFieldContainer' 
                                  inputClassName='' 
                                  htmlFor='addressZip5' 
                                  id='addressZip5'
                                  name='addressZip5' 
                                  type='text'
                                  title='Zip Code' 
                                  onChange={HandleInputChange} 
                                  error={isError}
                                  maxLength={5}/>
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