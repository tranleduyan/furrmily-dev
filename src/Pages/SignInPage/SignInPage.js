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
      </div>
      <div className='SignInPage-illustrationContainer'>
        
        </div>
    </div>
  )
}

export default SignInPage