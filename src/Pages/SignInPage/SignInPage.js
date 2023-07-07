/* Components */
import React from 'react'
import Message from '../../Components/Message/Message'

/* Stylings */
import '../../Styles/Pages/SignInPage/SignInPage.css'
import Logo from '../../Components/Logo/Logo'
import StandardInputField from '../../Components/InputFields/StandardInputField/StandardInputField'
import StandardButton from '../../Components/Buttons/StandardButton/StandardButton'


/* Icons */


function SignInPage() {
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
                
                {/* TODO: red color when error */}
                <StandardInputField className='' inputClassName='' htmlFor='username' id='username' name='username' type='text' title='USERNAME'/>

                {/* TODO:red color when error, padding*/}
                <StandardInputField className='SignInPage-passwordInputField' inputClassName='' htmlFor='password' id='password' name='password' type='password' title='PASSWORD'/>

                {/* TODO: Color is red, visible only when error */}
                <Message className='' content='INCORRECT USERNAME/PASSWORD'/>
              </div>

              {/* Buttons Group */}
              <div className='SignInPage-buttonGroupContainer'>
                <StandardButton className='' buttonSize='large' title='SIGN IN'/>
                <div className='flexRowCenter SignInPage-orContainer'>    
                  <h3 className='heading3' style={{margin:'0px'}}>OR</h3>
                </div>
              <StandardButton className='' buttonSize='large' title='SIGN UP'/>
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