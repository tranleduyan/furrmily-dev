/* Components */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Message from '../../Components/Message/Message'
import Logo from '../../Components/Logo/Logo'
import StandardInputField from '../../Components/InputFields/StandardInputField/StandardInputField'
import StandardButton from '../../Components/Buttons/StandardButton/StandardButton'

/* Stylings */
import '../../Styles/Pages/SignInPage/SignInPage.css'


/* Icons */


function SignInPage() {
  const navigate = useNavigate();
  
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [userInformation, setUserInformation] = useState ({
    username: '',
    password: '',
  });


  const NavigateToSignUp = () => {
    navigate('/SignUp');
  }

  const OnSignIn = () =>{
    if(IsValid() === false){
      setIsError(true);
      return;
    }
    {/* TODO: Check for sign in */}
  }

  const IsValid = () => {
    if(!userInformation.username || !userInformation.password){
      setErrorMessage('PLEASE FILL IN ALL REQUIRED FIELDS'); 
      return false;
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
    <div className='wrapper SignInPage-wrapper'>
      <div className='SignInPage-contentContainer'>
        <div className='flexRowStart SignInPage-topContainer'>
          <Logo className='SignInPage-logoText'/>
        </div>
        <div className='flexRowCenter SignInPage-pageContent'>
          <div className='SignInPage-signInFormContainer'>
            
            {/* TODO: action="" */}
            <form className='SignInPage-signInForm' autoComplete='off'>
              <div className='SignInPage-inputGroupContainer'>
                <h1 className='heading1'>SIGN IN</h1>
                
                <StandardInputField className='' inputClassName='' htmlFor='username' id='username' name='username' 
                                    type='text' title='USERNAME' 
                                    onChange={HandleInputChange} error={isError}/>

                <StandardInputField className='SignInPage-passwordInputField' inputClassName='' htmlFor='password' id='password' name='password' 
                                    type='password' title='PASSWORD' 
                                    onChange={HandleInputChange} error={isError}/>

                <Message className='' messageType='error' visibility={isError} content={errorMessage}/>
              </div>

              {/* Buttons Group */}
              <div className='SignInPage-buttonGroupContainer'>
                <StandardButton className='' buttonSize='large' title='SIGN IN' onClick={OnSignIn} />
                <div className='flexRowCenter SignInPage-orContainer'>    
                  <h3 className='heading3' style={{margin:'0px'}}>OR</h3>
                </div>
              <StandardButton className='' buttonSize='large' title='SIGN UP' onClick={NavigateToSignUp}/>
              </div>
            </form>
          </div>  
        </div>
      </div>

      {/* Further Sprint */}
      <div className='SignInPage-illustrationContainer'>
        
      </div>
    </div>
  )
}

export default SignInPage