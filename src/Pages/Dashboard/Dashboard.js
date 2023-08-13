//#region Import Components
import React, { useState } from 'react'
import IconButton from '../../Components/Buttons/IconButton'
import SideNavBar from '../../Components/NavBars/SideNavBar/SideNavBar'
import LinkButton from '../../Components/Buttons/LinkButton'
import PetsList from '../../Components/Lists/PetsList/PetsList'
import AddPetModal from '../../Components/Modals/AddPetModal/AddPetModal'
import { connect } from 'react-redux'
//#endregion


//#region Import Stylings
import '../../Styles/Pages/DashboardPage/Dashboard.css'
//#endregion

//#region Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons'
//#endregion

function Dashboard({ userData }) {

  //#region Variables
  
  const [isOpenAddPetModal, setIsOpenAddPetModal] = useState(false);
 
  //#endregion

 //#region Functions
 
 //OnAddPetButtonClick  - Open Pet Modal
  const OnAddPetButtonClick = () => {
    setIsOpenAddPetModal(true);
  }

  //OnCloseModal - Close the Modal that is currently opened
  const OnCloseModal = () =>{
    setIsOpenAddPetModal(false);
  }
  
  //#endregion

  return (
    <div className="wrapper Dashboard-wrapper">
      {/* Add Pet Modal */}
      <AddPetModal open={isOpenAddPetModal} OnClose={OnCloseModal} />

      {/* Side Nav Bar */}
      <SideNavBar
        userAvatar={userData.userAvatar}
        userName={userData.firstName}
      />
      <div className="Dashboard-content">
        <div className="Dashboard-pageHeaderContainer">
          <h1 className="heading1">Dashboard</h1>
        </div>
        <div className="Dashboard-pageContentContainer">
          {/* First Column in dashboard - Pets Section, Friends Section and Daily Progress Section*/}
          <div className="Dashboard-contentColumn1">
            {/* Pets Section*/}
            <section className="Dashboard-petsContainer">
              {/* Header - Pets */}
              <div className="Dashboard-sectionHeaderContainer">
                <p className="heading2 Dashboard-sectionHeaderText">Pets</p>
                <IconButton
                  className="flexRowCenter Dashboard-AddButton"
                  icon={<FontAwesomeIcon icon={faPlusCircle} />}
                  onClick={OnAddPetButtonClick}
                />
              </div>

              {/* Content - Pets List */}
              <PetsList
                userId={userData.userId}
                className="Dashboard-petsListContainer"
              />

              {/* See More Button */}
              <div className="flexRowCenter">
                <LinkButton to="/Pets" className="" title="See More" />
                <IconButton
                  className="flexRowCenter Dashboard-SeeAllButtonIcon"
                  icon={<FontAwesomeIcon icon={faChevronRight} />}
                />
              </div>
            </section>

            {/* Friends Section */}
            <section className="Dashboard-friendsContainer">
              {/* Header - Friends */}
              <div className="Dashboard-sectionHeaderContainer">
                <p className="heading2 Dashboard-sectionHeaderText">Friends</p>
                <IconButton
                  className="flexRowCenter Dashboard-ContinueButton"
                  icon={<FontAwesomeIcon icon={faChevronRight} />}
                />
              </div>

              {/* TODO: CONTENT - Friends List */}
            </section>

            {/* Daily Progress Section */}
            <section className="Dashboard-dailyProgressContainer">
              {/* Header - Today's Progress */}
              <div className="Dashboard-sectionHeaderContainer">
                <p className="heading2 Dashboard-sectionHeaderText">
                  Today's Progress
                </p>
              </div>

              {/* TODO: CONTENT - Today's Progress Percentage */}
            </section>
          </div>

          {/* Second column in dashboard - Tasks List Section, and Upcoming Appointments Section */}
          <div className="Dashboard-contentColumn2">
            {/* Tasks Section */}
            <section className="Dashboard-tasksContainer">
              {/* Header - Tasks */}
              <div className="Dashboard-sectionHeaderContainer">
                <p className="heading2 Dashboard-sectionHeaderText">Tasks</p>
                <IconButton
                  className="flexRowCenter Dashboard-AddButton"
                  icon={<FontAwesomeIcon icon={faPlusCircle} />}
                  onClick={OnAddPetButtonClick}
                />
              </div>

              {/* Content - Task List */}
              <TasksList className="Dashboard-tasksListContainer" />

              {/* See All Button */}
              <div className="flexRowCenter">
                <LinkButton to="/Pets" className="" title="See All" />
                <IconButton
                  className="flexRowCenter Dashboard-SeeAllButtonIcon"
                  icon={<FontAwesomeIcon icon={faChevronRight} />}
                />
              </div>
            </section>

            {/* Upcoming Appointments Section */}
            <section className="Dashboard-upcomingAppointmentsContainer">
              {/* Header - Upcoming Appointments */}
              <div className="Dashboard-sectionHeaderContainer">
                <p className="heading2 Dashboard-sectionHeaderText">
                  Upcoming Appointments
                </p>
                <IconButton
                  className="flexRowCenter Dashboard-ContinueButton"
                  icon={<FontAwesomeIcon icon={faChevronRight} />}
                />
              </div>

              {/* TODO: CONTENT - Upcoming Appointment List */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  userData: state.user.userData,
});

export default connect(mapStateToProps)(Dashboard);
