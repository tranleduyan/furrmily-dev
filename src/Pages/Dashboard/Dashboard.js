/* Components */
import React from 'react'
import IconButton from '../../Components/Buttons/IconButton'
import SideNavBar from '../../Components/NavBars/SideNavBar/SideNavBar'
import LinkButton from '../../Components/Buttons/LinkButton'

/* Stylings */
import '../../Styles/Pages/DashboardPage/Dashboard.css'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
  return (
    <div className='wrapper Dashboard-wrapper'>
      <SideNavBar userName={'Walker'}/>
      <div className='Dashboard-content'>
        <div className='Dashboard-pageHeaderContainer'>
          <h1 className='heading1'>Dashboard</h1>
        </div>
        <div className='Dashboard-pageContentContainer'>
          <div className='Dashboard-contentColumn1'>
            <section className='Dashboard-petsContainer'>
              <div className='Dashboard-sectionHeaderContainer'>
                <p className='heading2 Dashboard-sectionHeaderText'>Pets</p>
                <IconButton className='flexRowCenter Dashboard-AddButton' icon={<FontAwesomeIcon icon={faPlusCircle}/>}/>
              </div>
              <div className='Dashboard-petsListContainer'>
                <div className='Dashboard-petCard'>

                </div>
                <div className='Dashboard-petCard'>
                  
                </div>
              </div>
              <div className='flexRowCenter Dashboard-SeeAllButton'>
                <LinkButton to='/Pets' className='' title='See All'/>
                <IconButton className='flexRowCenter Dashboard-SeeAllButtonIcon' icon={<FontAwesomeIcon icon={faChevronRight}/>}/>
              </div>
            </section>
            <section className='Dashboard-friendsContainer'>
              <div className='Dashboard-sectionHeaderContainer'>
                <p className='heading2 Dashboard-sectionHeaderText'>Friends</p>
                <IconButton className='flexRowCenter Dashboard-ContinueButton' icon={<FontAwesomeIcon icon={faChevronRight}/>}/>
              </div>
            </section>
            <section className='Dashboard-dailyProgressContainer'>
              <div className='Dashboard-sectionHeaderContainer'>
                <p className='heading2 Dashboard-sectionHeaderText'>Today's Progress</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard