//#region Import Components
import React from 'react'
import GeneralCard from '../GeneralCard/GeneralCard'
import IconButton from '../../Buttons/IconButton/IconButton'
//#endregion

//#region Import Stylings
import '../../../Styles/Components/Cards/IconCard/IconCard.css'
//#endregion

//#region Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//#endregion

function IconCard({icon, children, layout, className, type = 'regular'}) {
    return (
        <GeneralCard className={`${className} IconCard-container`}>
            {type === 'regular' && 
            <>
                <div 
                    className={`${(layout && layout.includes('ColumnCenter')) ? 'flexColumnCenter' 
                                                                              : ''} IconCard-iconContainer`}>
                    <FontAwesomeIcon icon={icon}/>
                </div>
                <div className={`${(layout && layout.includes('ColumnCenter')) ? 'flexColumnCenterStart' 
                                                                              : 'flexColumn'} IconCard-informationContainer`}>
                    {children}
                </div>
            </>}
            {type === 'action' && 
            <>
                <div className='IconCard-actionInformationContainer'>
                    {children}
                </div>  
                <IconButton
                    className={`${layout && layout.includes('ColumnCenter') ? 'flexColumnCenter' 
                                                                            : ''} IconCard-iconContainer`}
                    icon={<FontAwesomeIcon icon={icon} />}
                    onClick={()=>{}}
                />
            </>}
        </GeneralCard>
    ) 
}

export default IconCard