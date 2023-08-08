/* Components */
import React from 'react'
import  ReactDOM  from 'react-dom';

/* Stylings */
import '../../../Styles/Components/Modals/GeneralModal.css';

/* Icons */

function GeneralModal({open, children}) {
  if(!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className='GeneralModal-overlayContainer' />
      <div className='GeneralModal-container'>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default GeneralModal