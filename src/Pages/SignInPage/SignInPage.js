/* Components */
import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { setUserData } from '../../storage';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Message from '../../Components/Message/Message'
import Logo from '../../Components/Logo/Logo'
import StandardInputField from '../../Components/InputFields/StandardInputField/StandardInputField'
import StandardButton from '../../Components/Buttons/StandardButton/StandardButton'
import UITEXT from '../../Global/Constants';
import { Converters } from '../../Global/Helpers';

/* Stylings */
import '../../Styles/Pages/SignInPage/SignInPage.css'


/* Icons */


function SignInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  /* errorMessage to return visually the message to the user */
  const [errorMessage, setErrorMessage] = useState('');

  /* Determine if there is an error (used to display errorMessage to the users) */
  const [isError, setIsError] = useState(false);
  
  /* The information of the user for form submission */
  const [userInformation, setUserInformation] = useState ({
    username: '',
    password: '',
  });


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
  
    /* API Information - Value */
    const apiURL = '/api/authentication/sign-in';
    const apiKey = 'ht8xjWktCv3ocTpjSYjkm3FCBotdJI7s60h6VS8i';
  
    /* Request Body to post (Include all neccessary information about the user's account for database comparation to sign in) */
    const requestBody = {
      username: userInformation.username,
      password: userInformation.password,
    };
  
    /* Post to the apiURL with requestBody and headers (Headers using the key for valid auth) */
    axios
      .post(apiURL, requestBody, {
        headers: {
          'X-API-KEY': apiKey,
        },
      })

      /* If there is no error, means sign in success, navigate to Dashboard */
      .then(response => {
        console.log('API Response:', response.data.responseObject);
        const userData = response.data.responseObject;

        dispatch(setUserData(userData));
        navigate('/Dashboard');
      })
      .catch(error => {
        console.log('API Error:', error);
        
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
                <h1 className='heading1'>{Converters.UpperCaseConverter(UITEXT.SIGN_IN_TEXT)}</h1>
                
                {/* Username input field */}
                <StandardInputField className='' inputClassName='' htmlFor='username' id='username' name='username' 
                                    type='text' title={Converters.UpperCaseConverter(UITEXT.USERNAME_TEXT)} 
                                    onChange={HandleInputChange} error={isError}/>

                {/* Password input field */}
                <StandardInputField className='SignInPage-passwordInputField' inputClassName='' htmlFor='password' id='password' name='password' 
                                    type='password' title={Converters.UpperCaseConverter(UITEXT.PASSWORD_TEXT)} 
                                    onChange={HandleInputChange} error={isError}/>

                {/* Message to display error to the user */}
                <Message className='' messageType='error' visibility={isError} content={errorMessage}/>
              </div>

              {/* Buttons Group */}
              <div className='SignInPage-buttonGroupContainer'>

                {/* Sign In Button */}
                <StandardButton className='' buttonSize='large' title={Converters.UpperCaseConverter(UITEXT.SIGN_IN_TEXT)} onClick={OnSignIn} />

                {/* 'Or' */}
                <div className='flexRowCenter SignInPage-orContainer'>    
                  <h3 className='heading3' style={{margin:'0px'}}>{Converters.UpperCaseConverter(UITEXT.OR_TEXT)}</h3>
                </div>

                {/* Sign Up Button */}
                <StandardButton className='' buttonSize='large' title={Converters.UpperCaseConverter(UITEXT.SIGN_UP_TEXT)} onClick={NavigateToSignUp}/>
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