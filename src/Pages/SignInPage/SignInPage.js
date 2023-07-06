/* Components */
import React from 'react'

/* Stylings */
import '../../Styles/Pages/SignInPage/SignInPage.css'
import Logo from '../../Components/Logo/Logo'
import StandardInputField from '../../Components/InputFields/StandardInputField/StandardInputField'

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

                {/* TODO: Color is red, add icon, visible only when error */}
                <p className='paragraph2'>INCORRECT USERNAME/PASSWORD</p>
              </div>

              {/* TODO: Button Component */}
              <div className='SignInPage-buttonGroupContainer'>
                <button type='button' className='largeButton'>
                  <p className='button'>SIGN IN</p></button>
              </div>
              <div className='flexRowCenter SignInPage-orContainer'>    
                <h3 className='heading3' style={{margin:'0px'}}>OR</h3>
              </div>
              {/* TODO: Button Component */}
                <button type='button' className='largeButton'>
                  <p className='button'>SIGN UP</p></button>
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