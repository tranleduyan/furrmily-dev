//#region Import Components
import React, { useState } from 'react'
import IconButton from '../../Components/Buttons/IconButton'
import SideNavBar from '../../Components/NavBars/SideNavBar/SideNavBar'
import LinkButton from '../../Components/Buttons/LinkButton'
import PetsList from '../../Components/Lists/PetsList/PetsList'
import AddPetModal from '../../Components/Modals/AddPetModal/AddPetModal'
import { connect } from 'react-redux'
import TasksList from '../../Components/Lists/TasksList/TasksList'
import AddTaskModal from '../../Components/Modals/AddTaskModal/AddTaskModal'
import FriendsList from '../../Components/Lists/FriendsList/FriendsList'
import { useNavigate } from 'react-router-dom'
import DailyProgressCard from '../../Components/Cards/DailyProgressCard/DailyProgressCard'
//#endregion

//#region Import Stylings
import '../../Styles/Pages/DashboardPage/Dashboard.css'
//#endregion

//#region Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons'
//#endregion

function Dashboard({ userData }) {

  //#region Component usages
  const navigate = useNavigate();
  //#endregion

  //#region Variables
  
  const [isOpenAddPetModal, setIsOpenAddPetModal] = useState(false);
  const [isOpenAddTaskModal, setIsOpenAddTaskModal] = useState(false);

  //#endregion

 //#region Functions
 
 //OnOpenAddPetModal  - Open Add Pet Modal
  const OnOpenAddPetModal = () => {
    setIsOpenAddPetModal(true);
  };

  //OnCloseAddPetModal - Close Add Pet Modal that is currently opened
  const OnCloseAddPetModal = () => {
    setIsOpenAddPetModal(false);
  };
  
  //OnOpenAddTaskModal - Open Task Modal 
  const OnOpenAddTaskModal = () => {
    setIsOpenAddTaskModal(true);
  };

  //OnCloseAddTaskModal - Close Add Task Modal that is currently opened
  const OnCloseAddTaskModal = () => {
    setIsOpenAddTaskModal(false);
  } 

  //OnPetCardClick - Navigate to Pets page and selected the selected pet card
  const OnPetCardClick = (petDetails) => {
    navigate('/Pets', {state: {petDetails}});
  }

  //#endregion

  return (
    <div className="wrapper Dashboard-wrapper">
      {/* Add Pet Modal */}
      <AddPetModal open={isOpenAddPetModal} OnClose={OnCloseAddPetModal} />
      {/* Add Task Modal */}
      <AddTaskModal open={isOpenAddTaskModal} OnClose={OnCloseAddTaskModal} />
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
                  onClick={OnOpenAddPetModal}
                />
              </div>

              {/* Content - Pets List */}
              <PetsList
                userId={userData.userId}
                userAvatar={userData.userAvatar}
                className="Dashboard-petsListContainer"
                onClick={OnPetCardClick}
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

                {/* Content - Friends List */}
                <FriendsList 
                  userId={userData.userId}
                  className="Dashboard-friendsListContainer"
                />
              
            </section>

            {/* Daily Progress Section */}
            <section className="Dashboard-dailyProgressContainer">
              {/* Header - Today's Progress */}
              <div className="Dashboard-sectionHeaderContainer">
                <p className="heading2 Dashboard-sectionHeaderText">
                  Today's Progress
                </p>
              </div>

              {/* Content - Today's Progress Percentage */}
              <DailyProgressCard 
                userId = {userData.userId}
                className="Dashboard-dailyProgressCardContainer"
              />

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
                  onClick={OnOpenAddTaskModal}
                />
              </div>

              {/* Content - Task List */}
              <TasksList
                userId={userData.userId} 
                className="Dashboard-tasksListContainer" />

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
