import React from 'react'
import StandardButton from '../../../Components/Buttons/StandardButton/StandardButton'
import  {UITEXT} from '../../../Global/Constants'
import { Converters } from '../../../Global/Helpers';
import  ReactDOM  from 'react-dom';

import '../../../Styles/Components/Modals/GeneralModal.css';

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