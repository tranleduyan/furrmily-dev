/* Components */
import React, { useState } from 'react'
import axios from 'axios'
import Message from '../../Components/Message/Message'
import Logo from '../../Components/Logo/Logo'
import StandardInputField from '../../Components/InputFields/StandardInputField/StandardInputField'
import StandardButton from '../../Components/Buttons/StandardButton/StandardButton'
import LinkButton from '../../Components/Buttons/LinkButton'
import IconButton from '../../Components/Buttons/IconButton/IconButton'

/* Stylings */
import '../../Styles/Pages/SignUpPage/SignUpPage.css'


/* Icons */
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

function SignUpPage() {
  const navigate = useNavigate();

  const [currentFormState, setCurrentFormState] = useState('Personal Information');
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);
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

  const OnSignUp = (event) => {
    if(IsValid() === false){
      setIsError(true);
      return;
    }
    const apiURL = '/api/sign-up';
    const apiKey = 'ht8xjWktCv3ocTpjSYjkm3FCBotdJI7s60h6VS8i';

    const requestBody = {
      firstName: userInformation.firstName,
      middleName: userInformation.middleName,
      lastName: userInformation.lastName,
      emailAddress: userInformation.emailAddress.toLowerCase(),
      phoneNumber: userInformation.phoneNumber,
      username: userInformation.username.toLowerCase(),
      password: userInformation.password,
    };

    axios
    .post(apiURL, requestBody, {
      headers: {
        'X-API-KEY': apiKey
      }
    })
    .then(response => {
      console.log('API Response:', response.data);
      navigate('/');
    })
    .catch(error => {
      console.log('API Error:', error);
      //Handle existing username or email error
      if(error.response.status === 401){
        const apiErrorMessage = error.response.data.message;
        setErrorMessage(apiErrorMessage);
      }
      else{
        setErrorMessage('AN ERROR OCCURRED WHILE SIGNING UP');
      }
      setIsError(true);
    });
  }

  const OnBack = (event) => {
    if(isError) {
      setIsError(false);
      setErrorMessage('');
    }
    if(currentFormState === 'Account Security Information')
      setCurrentFormState('Account Information');
    else if(currentFormState === 'Account Information')
      setCurrentFormState('Personal Information');
    event.preventDefault();
  }

  const IsValid = () => {
    if(currentFormState === 'Personal Information'){
      const userRegex = /^[A-Z][a-z]*$/;
      if(!userInformation.firstName || !userInformation.lastName){
        setErrorMessage('PLEASE FILL IN ALL REQUIRED FIELDS'); 
        return false;
      }
      else if(!userRegex.test(userInformation.firstName) || !userRegex.test(userInformation.lastName)){
        setErrorMessage('PLEASE ENTER VALID NAME'); 
        return false;
      }
    }
    else if(currentFormState === 'Account Information'){
      const usernameRegex = /^[a-zA-Z][a-z0-9_.]*$/;
      if(!userInformation.username || !userInformation.password || !userInformation.confirmPassword){
        setErrorMessage('PLEASE FILL IN ALL REQUIRED FIELDS');
        return false;
      }
      else if(!usernameRegex.test(userInformation.username)){
        setErrorMessage('PLEASE ENTER VALID USERNAME');
        return false;
      }
      else if(userInformation.password.length < 6){
        setErrorMessage('PASSWORD REQUIRES 6+ CHARACTERS');
        return false;
      }
      else if((userInformation.password).includes(' ')){
        setErrorMessage('PASSWORD MUST NOT HAVE SPACES');
        return false;
      }
      else if(userInformation.password !== userInformation.confirmPassword){
        setErrorMessage('THE PASSWORDS DO NOT MATCH');
        return false;
      }
    }
    else if(currentFormState === 'Account Security Information'){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneNumberRegex = /^\d+$/;
      if(!userInformation.emailAddress || !userInformation.confirmEmailAddress){
        setErrorMessage('PLEASE FILL IN ALL REQUIRED FIELDS');
        return false;
      }
      else if(!emailRegex.test(userInformation.emailAddress) || !emailRegex.test(userInformation.confirmEmailAddress)){
        setErrorMessage('PLEASE ENTER VALID EMAIL ADDRESS');
        return false;
      }
      else if(userInformation.emailAddress !== userInformation.confirmEmailAddress){
        setErrorMessage('THE EMAILS DO NOT MATCH');
        return false;
      }
      else if(userInformation.phoneNumber.length > 0 && (userInformation.phoneNumber.length !== 10 || !phoneNumberRegex.test(userInformation.phoneNumber))){
        setErrorMessage('PLEASE ENTER VALID PHONE NUMBER');
        return false;
      }
    }
    setErrorMessage('');
    return true;
  }

  const HandleInputChange = (propertyName, inputValue) => {
    if(isError) {
      setIsError(false);
      setErrorMessage('');
    }
    setUserInformation({...userInformation, [propertyName]: inputValue});
  }

  return (
    <div className='wrapper SignUpPage-wrapper'>
      <div className='SignUpPage-contentContainer'>
        <div className='flexRowStart SignUpPage-topContainer'>
          <Logo className='SignUpPage-logoText'/>
        </div>
        <div className='flexRowCenter SignUpPage-pageContent'>
          <div className='SignUpPage-signUpFormContainer'>

            {/* TODO: action="" */}
            <form className='SignUpPage-signUpForm' autoComplete='off'>
              <div className='SignUpPage-inputGroupContainer'>
                <div className='SignUpPage-formHeaderContainer'>
                {currentFormState !== 'Personal Information' && (
                  <>
                  <IconButton className='SignInPage-backButton' icon={<FaChevronLeft/>} onClick={OnBack}/>
                  </>
                )}
                  <h1 className='heading1'>SIGN UP</h1>
                </div>

                {/* Personal Information State */}
                {currentFormState === 'Personal Information' && (
                  <>
                    <StandardInputField className='' inputClassName='' htmlFor='firstName' id='firstName' name='firstName' 
                                        type='text' title='FIRST NAME' value={userInformation.firstName} 
                                        onChange={HandleInputChange} error={isError}/>

                    <StandardInputField className='SignUpPage-nonFirstInputField' inputClassName='' htmlFor='middleName' id='middleName' name='middleName' 
                                        type='text' title='MIDDLE NAME (OPTIONAL)' value={userInformation.middleName} 
                                        onChange={HandleInputChange} error={isError}/>

                    <StandardInputField className='SignUpPage-nonFirstInputField' inputClassName='' htmlFor='lastName' id='lastName' name='lastName' type='text' title='LAST NAME' value={userInformation.lastName} onChange={HandleInputChange} error={isError}/>
                  </>)
                }

                {/* Account Information State */}
                {currentFormState === 'Account Information' && (
                  <>
                    <StandardInputField className='' inputClassName='' htmlFor='username' id='username' name='username' 
                                        type='text' title='USERNAME' value={userInformation.username} 
                                        onChange={HandleInputChange} error={isError}/>

                    <StandardInputField className='SignUpPage-nonFirstInputField' inputClassName='' htmlFor='password' id='password' name='password' 
                                        type='password' title='PASSWORD' value={userInformation.password} 
                                        onChange={HandleInputChange} error={isError}/>

                    <StandardInputField className='SignUpPage-nonFirstInputField' inputClassName='' htmlFor='confirmPassword' id='confirmPassword' name='confirmPassword' 
                                        type='password' title='CONFIRM PASSWORD' value={userInformation.confirmPassword} 
                                        onChange={HandleInputChange} error={isError}/>
                  </>)
                }

                {/* Account Security Information State */}
                {currentFormState === 'Account Security Information' && (
                  <>
                    <StandardInputField className='' inputClassName='' 
                                        htmlFor='emailAddress' id='emailAddress' name='emailAddress' 
                                        type='email' title='EMAIL ADDRESS' value={userInformation.emailAddress} 
                                        onChange={HandleInputChange} error={isError}/>

                    <StandardInputField className='SignUpPage-nonFirstInputField' inputClassName='' 
                                        htmlFor='confirmEmailAddress' id='confirmEmailAddress' name='confirmEmailAddress' 
                                        type='email' title='CONFIRM EMAIL ADDRESS' value={userInformation.confirmEmailAddress} 
                                        onChange={HandleInputChange} error={isError}/>
 
                    <StandardInputField className='SignUpPage-nonFirstInputField' inputClassName='' htmlFor='phoneNumber' id='phoneNumber' name='phoneNumber' 
                                        type='tel' title='PHONE NUMBER (OPTIONAL)' value={userInformation.phoneNumber} 
                                        onChange={HandleInputChange} error={isError}/>
                  </>)
                }

                <Message className='' messageType='error' visibility={isError} content={errorMessage}/>
              </div>

              {/* Buttons Group */}
              <div className='SignUpPage-buttonGroupContainer'>
                {(currentFormState === 'Personal Information' || currentFormState === 'Account Information') && (
                  <>
                     <StandardButton className='' buttonSize='large' title='CONTINUE' onClick={OnContinue}/>
                  </>
                )}
                {(currentFormState === 'Account Security Information') && (
                  <>
                    <StandardButton className='' buttonSize='large' title='SIGN UP' onClick={OnSignUp}/>
                  </>
                )}
                <LinkButton className='SignUpPage-linkButtonContainer' to='/' title='ALREADY HAVE AN ACCOUNT?'/>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='SignUpPage-illustrationContainer'>

      </div>
    </div>
  )
}

export default SignUpPage