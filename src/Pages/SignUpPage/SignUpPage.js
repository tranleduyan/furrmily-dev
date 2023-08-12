/* Components */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Message from '../../Components/Message/Message'
import Logo from '../../Components/Logo/Logo'
import StandardInputField from '../../Components/InputFields/StandardInputField/StandardInputField'
import StandardButton from '../../Components/Buttons/StandardButton/StandardButton'
import LinkButton from '../../Components/Buttons/LinkButton'
import IconButton from '../../Components/Buttons/IconButton/IconButton'
import {API, UITEXT} from '../../Global/Constants'
import { Converters } from '../../Global/Helpers';

/* Stylings */
import '../../Styles/Pages/SignUpPage/SignUpPage.css'


/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function SignUpPage() {
  const navigate = useNavigate();

  /* Form State - Personal Information, Account Information, Account Security Information */
  const [currentFormState, setCurrentFormState] = useState('Personal Information');

  /* errorMessage to return visually the message to the user */
  const [errorMessage, setErrorMessage] = useState('');

  /* Determine if there is an error (used to display errorMessage to the users) */
  const [isError, setIsError] = useState(false);

  /* The information of the user for form submission (This is because we toggle visibility of the form using the form state) */
  const [userInformation, setUserInformation] = useState ({
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    emailAddress: '',
    confirmEmailAddress: '',
    phoneNumber: '',
  });

  /* OnContinue - Move to the next state of the form to collect further information about the user for sign up if the input fields are all valid */
  const OnContinue = () => {
    if(IsValid() === false){
      setIsError(true);
      return;
    }
    if(currentFormState === 'Personal Information')
      setCurrentFormState('Account Information');
    else if(currentFormState === 'Account Information')
      setCurrentFormState('Account Security Information');
  }

  /* OnSignUp - If every required information has been collected, perform a post request to the database. */
  const OnSignUp = (event) => {
    if(IsValid() === false){
      setIsError(true);
      return;
    }

    /* API Information - Value */
    const apiURL = API.signUpURL;
    const apiKey = API.key;

    /* Request Body to post (Include all neccessary information about the user and their account for creation) */
    const requestBody = {
      firstName: userInformation.firstName,
      middleName: userInformation.middleName,
      lastName: userInformation.lastName,
      emailAddress: userInformation.emailAddress.toLowerCase(),
      phoneNumber: userInformation.phoneNumber,
      username: userInformation.username.toLowerCase(),
      password: userInformation.password,
      userAvatar: 'faUser',
    };

    /* Post to the apiURL with requestBody and headers (Headers using the key for valid auth) */
    axios
    .post(apiURL, requestBody, {
      headers: {
        'X-API-KEY': apiKey
      }
    })
    .then(response => {
      /* Navigate back to Sign In Page */
      navigate('/');
    })
    .catch(error => {
      /* Handle existing username or email error */
      if(error.response.status === 401){
        const apiErrorMessage = error.response.data.message;
        setErrorMessage(Converters.UpperCaseConverter(apiErrorMessage));
      }
      else{
        setErrorMessage(Converters.UpperCaseConverter(UITEXT.GENERAL_ERROR));
      }
      setIsError(true);
    });
  }

  /* OnBack - Return to previous state of the current state of the form */
  const OnBack = (event) => {
    /* If there is error, just remove it and allow the user to go back */
    if(isError) {
      setIsError(false);
      setErrorMessage('');
    }

    if(currentFormState === 'Account Security Information')
      setCurrentFormState('Account Information');
    else if(currentFormState === 'Account Information')
      setCurrentFormState('Personal Information');

    /* Prevent Default because of the Password input type that browser behaves differently */  
    event.preventDefault();
  }

  /* IsValid - Check to see if all required input field of the current form state is valid to progress */
  const IsValid = () => {

    if(currentFormState === 'Personal Information'){
      /* Name Regex - Capital first letter */
      const userRegex = /^[A-Z][a-zA-Z ]*$/;
      
      /* Check if the First Name and Last Name input fields are blank, if blank, it is an error */
      if(!userInformation.firstName || !userInformation.lastName){
        setErrorMessage(Converters.UpperCaseConverter(UITEXT.EMPTY_FIELD_ERROR)); 
        return false;
      }
      /* Check if the First Name and Last Name input fields are filled with valid name. 
         A valid name has a capital letter in front */
      else if(!userRegex.test(userInformation.firstName) || !userRegex.test(userInformation.lastName)){
        setErrorMessage(Converters.UpperCaseConverter(UITEXT.INVALID_NAME_ERROR)); 
        return false;
      }
    }
    else if(currentFormState === 'Account Information'){
      /* usernameRegex - Username must start with letter, then it can be any alphanumeric values, underscore, or period */
      const usernameRegex = /^[a-zA-Z][a-z0-9_.]*$/;
      
      /* Check if all required input fields are filled */
      if(!userInformation.username || !userInformation.password || !userInformation.confirmPassword){
        setErrorMessage(Converters.UpperCaseConverter(UITEXT.EMPTY_FIELD_ERROR));
        return false;
      }

      /* Check if username is valid */
      else if(!usernameRegex.test(userInformation.username)){
        setErrorMessage(Converters.UpperCaseConverter(UITEXT.INVALID_USERNAME_ERROR));
        return false;
      }

      /* Check if password is less than 6 Characters */
      else if(userInformation.password.length < 6){
        setErrorMessage(Converters.UpperCaseConverter(UITEXT.PASSWORD_SHORT_ERROR));
        return false;
      }

      /* Check if password has space */
      else if((userInformation.password).includes(' ')){
        setErrorMessage(Converters.UpperCaseConverter(UITEXT.PASSWORD_SPACE_ERROR));
        return false;
      }

      /* Check if password and confirm password are matched */
      else if(userInformation.password !== userInformation.confirmPassword){
        setErrorMessage(Converters.UpperCaseConverter(UITEXT.PASSWORD_MISMATCHED_ERROR));
        return false;
      }
    }
    else if(currentFormState === 'Account Security Information'){
      /* emailRegex -  [any characters that is not space or '@'] @ [any characters that is not space or '@'] . [any characters that is not space or '@'] */
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      /* phoneNumberRegex - [any digits] */
      const phoneNumberRegex = /^\d+$/;

      /* Check if all required fields are filled */
      if(!userInformation.emailAddress || !userInformation.confirmEmailAddress){
        setErrorMessage(Converters.UpperCaseConverter(UITEXT.EMPTY_FIELD_ERROR));
        return false;
      }
      
      /* Check if the provided email address is valid */
      else if(!emailRegex.test(userInformation.emailAddress) || !emailRegex.test(userInformation.confirmEmailAddress)){
        setErrorMessage(Converters.UpperCaseConverter(UITEXT.INVALID_EMAIL_ADDRESS_ERROR));
        return false;
      }

      /* Check if email address and confirm email address are matched */
      else if(userInformation.emailAddress !== userInformation.confirmEmailAddress){
        setErrorMessage(Converters.UpperCaseConverter(UITEXT.EMAIL_MISMATCHED_ERROR));
        return false;
      }

      /* Check if phone number is valid - must be 10 characters and all digits */
      else if(userInformation.phoneNumber.length > 0 && (userInformation.phoneNumber.length !== 10 || !phoneNumberRegex.test(userInformation.phoneNumber))){
        setErrorMessage(Converters.UpperCaseConverter(UITEXT.INVALID_PHONE_NUMBER_ERROR));
        return false;
      }
    }

    /* If Passed all then means, it is valid */
    setErrorMessage('');
    return true;
  }

  /* HandleInputChange - takes the propertyName of the input to update userInformation object with the input value */
  const HandleInputChange = (propertyName, inputValue) => {
    if(isError) {
      setIsError(false);
      setErrorMessage('');
    }
    setUserInformation({...userInformation, [propertyName]: inputValue});
  }

  return (
    <div className='wrapper SignUpPage-wrapper'>

      {/* Content Container */}
      <div className='SignUpPage-contentContainer'>
        <div className='flexRowStart SignUpPage-topContainer'>
          <Logo className='SignUpPage-logoText'/>
        </div>
        <div className='flexRowCenter SignUpPage-pageContent'>
          <div className='SignUpPage-signUpFormContainer'>
            {/* Sign Up Form */}
            <form className='SignUpPage-signUpForm' autoComplete='off'>
              <div className='SignUpPage-inputGroupContainer'>
                <div className='SignUpPage-formHeaderContainer'>
                  {/* If form state is not Personal Information, displays the back button */}
                  {currentFormState !== 'Personal Information' && (
                    <>
                    <IconButton className='SignInPage-backButton' icon={<FontAwesomeIcon icon={faChevronLeft} />} onClick={OnBack}/>
                    </>
                  )}
                  <h1 className='heading1'>SIGN UP</h1>
                </div>

                {/* If the form state is 'Personal Information State' */}
                {currentFormState === 'Personal Information' && (
                  <>
                    {/* First Name input field */}
                    <StandardInputField className='' 
                                        inputClassName='' 
                                        htmlFor='firstName' 
                                        id='firstName' 
                                        name='firstName' 
                                        type='text' 
                                        title='FIRST NAME' 
                                        value={userInformation.firstName} 
                                        onChange={HandleInputChange} 
                                        error={isError}/>
                    
                    {/* Middle Name input field */}
                    <StandardInputField className='SignUpPage-nonFirstInputField' 
                                        inputClassName='' 
                                        htmlFor='middleName' 
                                        id='middleName' 
                                        name='middleName' 
                                        type='text' 
                                        title='MIDDLE NAME (OPTIONAL)' 
                                        value={userInformation.middleName} 
                                        onChange={HandleInputChange} 
                                        error={isError}/>

                    {/* Last Name input field */}
                    <StandardInputField className='SignUpPage-nonFirstInputField' 
                                        inputClassName='' 
                                        htmlFor='lastName' 
                                        id='lastName' 
                                        name='lastName'
                                        type='text' 
                                        title='LAST NAME' 
                                        value={userInformation.lastName}
                                        onChange={HandleInputChange} 
                                        error={isError}/>
                  </>
                )}

                {/* If the form state is 'Account Information State' */}
                {currentFormState === 'Account Information' && (
                  <>
                    {/* Username input field */}
                    <StandardInputField className='' 
                                        inputClassName='' 
                                        htmlFor='username' 
                                        id='username' 
                                        name='username' 
                                        type='text' 
                                        title='USERNAME' 
                                        value={userInformation.username} 
                                        onChange={HandleInputChange}
                                        error={isError}/>

                    {/* Password input field */}
                    <StandardInputField className='SignUpPage-nonFirstInputField'
                                        inputClassName=''
                                        htmlFor='password'
                                        id='password'
                                        name='password' 
                                        type='password'
                                        title='PASSWORD'
                                        value={userInformation.password} 
                                        onChange={HandleInputChange}
                                        error={isError}/>

                    {/* Confirm Password input Field */}
                    <StandardInputField className='SignUpPage-nonFirstInputField'
                                        inputClassName=''
                                        htmlFor='confirmPassword'
                                        id='confirmPassword'
                                        name='confirmPassword' 
                                        type='password'
                                        title='CONFIRM PASSWORD'
                                        value={userInformation.confirmPassword} 
                                        onChange={HandleInputChange}
                                        error={isError}/>
                  </>
                )}

                {/* If the form state is 'Account Security Information State' */}
                {currentFormState === 'Account Security Information' && (
                  <>
                    {/* Email Address input field */}
                    <StandardInputField className=''
                                        inputClassName='' 
                                        htmlFor='emailAddress'
                                        id='emailAddress'
                                        name='emailAddress' 
                                        type='email'
                                        title='EMAIL ADDRESS'
                                        value={userInformation.emailAddress} 
                                        onChange={HandleInputChange}
                                        error={isError}/>

                    {/* Confirm Email Address input field */}
                    <StandardInputField className='SignUpPage-nonFirstInputField'
                                        inputClassName='' 
                                        htmlFor='confirmEmailAddress'
                                        id='confirmEmailAddress'
                                        name='confirmEmailAddress' 
                                        type='email'
                                        title='CONFIRM EMAIL ADDRESS'
                                        value={userInformation.confirmEmailAddress} 
                                        onChange={HandleInputChange}
                                        error={isError}/>

                    {/* Phone Number input field */}
                    <StandardInputField className='SignUpPage-nonFirstInputField'
                                        inputClassName=''
                                        htmlFor='phoneNumber'
                                        id='phoneNumber'
                                        name='phoneNumber' 
                                        type='tel'
                                        title='PHONE NUMBER (OPTIONAL)'
                                        value={userInformation.phoneNumber} 
                                        onChange={HandleInputChange}
                                        error={isError}/>
                  </>
                )}

                {/* Message - To display the error message to the user */}
                <Message className='' messageType='error' visibility={isError} content={errorMessage}/>
              </div>

              {/* Buttons Group */}
              <div className='SignUpPage-buttonGroupContainer'>
                
                {/* If the form state is 'Personal Information' or 'Account Information' display Continue button to progress */}
                {(currentFormState === 'Personal Information' || currentFormState === 'Account Information') && (
                  <>
                     <StandardButton className='' type='Primary' title='CONTINUE' onClick={OnContinue}/>
                  </>
                )}

                {/* If the form state is 'Account Security Information,' display Sign Up button to submit all the information and create the account */}
                {(currentFormState === 'Account Security Information') && (
                  <>
                    <StandardButton className='' type='Primary' title='SIGN UP' onClick={OnSignUp}/>
                  </>
                )}

                {/* ALREADY HAVE AN ACCOUNT? Link button */}
                <LinkButton className='SignUpPage-linkButtonContainer' to='/' title='ALREADY HAVE AN ACCOUNT?'/>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Illustration Container */}
      <div className='SignUpPage-illustrationContainer'>

      </div>
    </div>
  )
}

export default SignUpPage