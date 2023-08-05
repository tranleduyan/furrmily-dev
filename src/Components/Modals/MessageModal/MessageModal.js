import React from 'react'
import GeneralModal from '../GeneralModal/GeneralModal'
import { Converters } from '../../../Global/Helpers'
import UITEXT from '../../../Global/Constants'
import StandardButton from '../../Buttons/StandardButton/StandardButton'

import '../../../Styles/Components/Modals/MessageModal.css'

function MessageModal({open, OnClose, Message}) {
    if(!open) return null;
    return (
        <GeneralModal open={open}>
            <div className='flexRowCenter MessageModal-content'>
                <p className='paragraph2'>{Message}</p>
            </div>
            <StandardButton className='' buttonSize='large' title={Converters.UpperCaseConverter(UITEXT.CLOSE_TEXT)} onClick={OnClose}/>
        </GeneralModal>
    )
}

export default MessageModal