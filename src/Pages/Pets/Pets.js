//#region Import Component
import React from 'react'
import SideNavBar from '../../Components/NavBars/SideNavBar/SideNavBar'
import { connect } from 'react-redux'
import IconButton from '../../Components/Buttons/IconButton/IconButton'
import PetsList from '../../Components/Lists/PetsList/PetsList'
//#endregion

//#region Import Stylings
import '../../Styles/Pages/Pets/Pets.css'

//#endregion

//#region Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons'
//#endregion

function Pets({ userData, petProfiles }) {
  return (
    <div className='wrapper Pets-wrapper'>
      <SideNavBar 
        userAvatar={userData.userAvatar} 
        userName={userData.firstName}/>
      <div className='Pets-content'>
        <div className='Pets-pageHeaderContainer'>
          <h1 className='heading1'>Pets</h1>
        </div>
        <div className='Pets-pageContentContainer'>
          <div className='Pets-contentColumn1'>
            <section className='Pets-petsContainer'>
              <div className='Pets-sectionHeaderContainer'>
                <div className='Pets-petsListFilterContainer'>
                  <div className='Pets-petsListFilter flexRowCenter'>
                    <p className='paragraph2'>All</p>
                  </div>
                  <div className='Pets-petsListFilter flexRowCenter'>
                    <p className='paragraph2'>Owned</p>
                  </div>
                  <div className='Pets-petsListFilter flexRowCenter'>
                    <p className='paragraph2'>In Care</p>
                  </div>
                </div>
                <IconButton
                  className="flexRowCenter Pets-AddButton"
                  icon={<FontAwesomeIcon icon={faPlusCircle} />}
                  onClick={()=>{}}
                />
              </div>
              <PetsList
                userId={userData.userId}
                userAvatar={userData.userAvatar}
                className="Pets-petsListContainer"
              />
              <div className="flexRowCenter">
                <p className='paragraph2'>{`Total: ${petProfiles.length} ${(petProfiles.length > 1) ? 'Pets' : 'Pet'}`}</p>
              </div>
            </section>

            {/* Members Section */}
            <section className="Pets-membersContainer">
              {/* Header - Members */}
              <div className="Pets-sectionHeaderContainer">
                <p className="heading2 Pets-sectionHeaderText">Members</p>
                <IconButton
                  className="flexRowCenter Pets-ContinueButton"
                  icon={<FontAwesomeIcon icon={faChevronRight} />}
                />
              </div>

              {/* TODO: CONTENT - Friends List */}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.user.userData,
  petProfiles: state.petProfiles.data,
});

export default connect(mapStateToProps)(Pets)