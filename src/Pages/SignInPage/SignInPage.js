/* Components */
import React from 'react'

/* Stylings */
import '../../Styles/Pages/SignInPage/SignInPage.css'
import Logo from '../../Components/Logo/Logo'

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
            <form className='SignInPage-signInForm'>
              <div className='SignInPage-inputGroupContainer'>
                <h1 className='heading1'>SIGN IN</h1>
                
                {/* TODO: Input Field Component, red color when error */}
                <div className='SignInPage-inputFieldContainer'>
                  <label htmlFor='username' className='heading3'>USERNAME</label>
                  <input type='text' name='username' id='username' className='paragraph2 SignInPage-inputField' required/>
                </div>

                {/* TODO: Input Field Component, red color when error */}
                <div style={{margin:'15px 0px 0px 0px'}}className='SignInPage-inputFieldContainer'>
                  <label htmlFor='password' className='heading3'>PASSWORD</label>
                  <input type='text' name='password' id='password' className='paragraph2 SignInPage-inputField' required/>
                </div>

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