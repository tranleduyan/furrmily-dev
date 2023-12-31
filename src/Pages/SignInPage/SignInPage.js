//#region Import Components
import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { setPetBreeds, setPetTypes, setUserData } from '../../storage';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Message from '../../Components/Message/Message'
import Logo from '../../Components/Logo/Logo'
import StandardInputField from '../../Components/InputFields/StandardInputField/StandardInputField'
import StandardButton from '../../Components/Buttons/StandardButton/StandardButton'
import {API, UITEXT} from '../../Global/Constants';
import { Converters } from '../../Global/Helpers';
//#endregion

//#region Import Stylings
import '../../Styles/Pages/SignInPage/SignInPage.css'
//#endregion

function SignInPage() {

  //#region Component Usage

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  //#endregion

  //#region Variables
  
  /* errorMessage to return visually the message to the user */
  const [errorMessage, setErrorMessage] = useState('');

  /* Determine if there is an error (used to display errorMessage to the users) */
  const [isError, setIsError] = useState(false);
  
  /* The information of the user for form submission */
  const [userInformation, setUserInformation] = useState ({
    username: '',
    password: '',
  });

  /* Request Body to post (Include all neccessary information about the user's account for database comparation to sign in) */
  const requestBody = {
    username: userInformation.username,
    password: userInformation.password,
  };

  //#endregion

  //#region Functions

  /* NavigateToSignUp - navigate the user to Sign Up Page */
  const NavigateToSignUp = () => {
    navigate('/SignUp');
  }

  /* OnSignIn - If all the input fields are valid, perform a post request to compare the database to sign in  */
  const OnSignIn = () => {
    if (IsValid() === false) {
      setIsError(true);
      return;
    }

    /* Post to the apiURL with requestBody and headers (Headers using the key for valid auth) */
    axios
      .post(API.signInURL, requestBody, {
        headers: {
          'X-API-KEY': API.key,
        },
      })

      /* If there is no error, means sign in success, navigate to Dashboard */
      .then(response => {
        const userData = response.data.responseObject;
        dispatch(setUserData(userData));

        axios
          .get(API.petTypesURL, {
            headers: {
              'X-API-KEY': API.key,
            }
          })
          .then(petTypesResponse => {
            dispatch(setPetTypes(petTypesResponse.data.responseObject));

            axios.get(API.petBreedsURL, {
              headers: {
                'X-API-KEY': API.key,
              }
            })
            .then(petBreedsResponse => {
              dispatch(setPetBreeds(petBreedsResponse.data.responseObject));
              navigate('/Dashboard');
            })
            .catch(error => {
              console.log(error);
            });
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        /* If there is an error, set the error message display the error to the user */
        const apiErrorMessage = error.response.data.message;
        setErrorMessage(Converters.UpperCaseConverter(apiErrorMessage));
        setIsError(true);
      });
  };
  
  /* IsValid - Check if all inputs are valid to sign in */
  const IsValid = () => {

    /* Check if all inputs are filled in */
    if(!userInformation.username || !userInformation.password){
      setErrorMessage(Converters.UpperCaseConverter(UITEXT.EMPTY_FIELD_ERROR)); 
      return false;
    }

    /* if all inputs are filled in means it is good to process -> sign in */
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

  //#endregion
  
  return (
    <div className='wrapper SignInPage-wrapper'>

      {/* Content Container */}
      <div className='SignInPage-contentContainer'>
        <div className='flexRowStart SignInPage-topContainer'>
          <Logo className='SignInPage-logoText'/>
        </div>
        <div className='flexRowCenter SignInPage-pageContent'>
          <div className='SignInPage-signInFormContainer'>
            
            {/* Sign In Form */}
            <form className='SignInPage-signInForm' autoComplete='off'>
              <div className='SignInPage-inputGroupContainer'>
                <h1 className='heading1'>SIGN IN</h1>
                
                {/* Username input field */}
                <StandardInputField className='' 
                                    inputClassName='' 
                                    htmlFor='username' 
                                    id='username' 
                                    name='username' 
                                    type='text' 
                                    title='USERNAME'
                                    onChange={HandleInputChange} 
                                    error={isError}/>

                {/* Password input field */}
                <StandardInputField className='SignInPage-passwordInputField' 
                                    inputClassName=''
                                    htmlFor='password' 
                                    id='password' 
                                    name='password' 
                                    type='password' 
                                    title='PASSWORD'
                                    onChange={HandleInputChange} 
                                    error={isError}/>

                {/* Message to display error to the user */}
                <Message className='' messageType='error' visibility={isError} content={errorMessage}/>
              </div>

              {/* Buttons Group */}
              <div className='SignInPage-buttonGroupContainer'>

                {/* Sign In Button */}
                <StandardButton className='' type='Primary' title='SIGN IN' onClick={OnSignIn} />

                {/* 'Or' */}
                <div className='flexRowCenter SignInPage-orContainer'>    
                  <h3 className='heading3' style={{margin:'0px'}}>OR</h3>
                </div>

                {/* Sign Up Button */}
                <StandardButton className='' type='Primary' title='SIGN UP' onClick={NavigateToSignUp}/>
              </div>
            </form>
          </div>  
        </div>
      </div>

      {/* Further Sprint - IllustrationContainer */}
      <div className='SignInPage-illustrationContainer'>
        
      </div>
    </div>
  )
}

export default connect()(SignInPage)