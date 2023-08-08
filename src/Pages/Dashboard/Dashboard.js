/* Components */
import React, { useState } from 'react'
import IconButton from '../../Components/Buttons/IconButton'
import SideNavBar from '../../Components/NavBars/SideNavBar/SideNavBar'
import LinkButton from '../../Components/Buttons/LinkButton'
import PetsList from '../../Components/Lists/PetsList/PetsList'
import { connect } from 'react-redux'
import {UITEXT} from '../../Global/Constants'
import { Converters } from '../../Global/Helpers';
import GeneralModal from '../../Components/Modals/GeneralModal/GeneralModal'

/* Stylings */
import '../../Styles/Pages/DashboardPage/Dashboard.css'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import MessageModal from '../../Components/Modals/MessageModal/MessageModal'
import AddPetModal from '../../Components/Modals/AddPetModal/AddPetModal'

function Dashboard({ userData }) {
  const [isOpenAddPetModal, setIsOpenAddPetModal] = useState(false);
  const [isOpenAddTaskModal, setIsOpenAddTask] = useState(false);

  const OnAddPetButtonClick = () => {
    setIsOpenAddPetModal(true);
  }

  const OnCloseModal = () =>{
    setIsOpenAddPetModal(false);
  }

  return (
    <div className='wrapper Dashboard-wrapper'>
      <AddPetModal open={isOpenAddPetModal} OnClose={OnCloseModal}/>
      <SideNavBar userAvatar={userData.userAvatar} userName={userData.firstName}/>
      <div className='Dashboard-content'>
        <div className='Dashboard-pageHeaderContainer'>
          <h1 className='heading1'>Dashboard</h1>
        </div>
        <div className='Dashboard-pageContentContainer'>
          <div className='Dashboard-contentColumn1'>
            <section className='Dashboard-petsContainer'>
              <div className='Dashboard-sectionHeaderContainer'>
                <p className='heading2 Dashboard-sectionHeaderText'>Pets</p>
                <IconButton className='flexRowCenter Dashboard-AddButton' icon={<FontAwesomeIcon icon={faPlusCircle}/>} onClick={OnAddPetButtonClick}/>
              </div>
              <PetsList userId={userData.userId} className='Dashboard-petsListContainer'/>
              <div className='flexRowCenter'>
                <LinkButton to='/Pets' className='' title='See More'/>
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

const mapStateToProps = state => ({
  userData: state.userData,
});


export default connect(mapStateToProps)(Dashboard)