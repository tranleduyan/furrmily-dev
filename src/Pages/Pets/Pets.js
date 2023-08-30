//#region Import Component
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import SideNavBar from '../../Components/NavBars/SideNavBar/SideNavBar'
import { connect } from 'react-redux'
import IconButton from '../../Components/Buttons/IconButton/IconButton'
import PetsList from '../../Components/Lists/PetsList/PetsList'
import IconCard from '../../Components/Cards/IconCard/IconCard'
import { Converters } from '../../Global/Helpers'
import AddPetModal from '../../Components/Modals/AddPetModal/AddPetModal'
//#endregion

//#region Import Stylings
import '../../Styles/Pages/Pets/Pets.css'
//#endregion

//#region Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faPaw, faNoteSticky, faLocationDot, faGift, faPenToSquare, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
//#endregion

function Pets({ userData, petProfiles }) {

  //#region Component Usage
  const location = useLocation();
  //#endregion

  //#region Variables
  
  const [isOpenAddPetModal, setIsOpenAddPetModal] = useState(false);

  //Selected Pet Information
  const [selectedPet, setSelectedPet] = useState((location.state?.petDetails));
  const [selectedPetId, setSelectedPetId] = useState((location.state?.petDetails.id));
  const [defaulSelectPet, setDefaultSelectPet] = useState((location.state) ? false : true);

  //#endregion

  //#region Functions

  //OnPetCardClicked - set the information of selected pet information
  const OnPetCardClicked = (petDetails) => {
    setSelectedPet(petDetails);
    setSelectedPetId(petDetails.id);
  }

  //OnOpenAddPetModal  - Open Add Pet Modal
  const OnOpenAddPetModal = () => {
    setIsOpenAddPetModal(true);
  };

  //OnCloseAddPetModal - Close Add Pet Modal that is currently opened
  const OnCloseAddPetModal = () => {
    setIsOpenAddPetModal(false);
  };

  //#endregion

  return (
    <div className='wrapper Pets-wrapper'>
      {/* Add Pet Modal */}
      <AddPetModal open={isOpenAddPetModal} OnClose={OnCloseAddPetModal} />
      {/* SideNavBar */}
      <SideNavBar 
        userAvatar={userData.userAvatar} 
        userName={userData.firstName}/>
      <div className='Pets-content'>
        <div className='Pets-pageHeaderContainer'>
          <h1 className='heading1'>Pets</h1>
        </div>
        <div className='Pets-pageContentContainer'>
          <div className='Pets-contentColumn1'>
            {/* Pets Section */}
            <section className='Pets-petsContainer'>
              <div className='Pets-sectionHeaderContainer'>
                {/* Pets List Filter Options */}
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
                {/* Add Pet Button */}
                <IconButton
                  className="flexRowCenter Pets-sectionHeaderIconButton"
                  icon={<FontAwesomeIcon icon={faPlusCircle} />}
                  onClick={OnOpenAddPetModal}
                />
              </div>
              {/* Pets List */}
              <PetsList
                userId={userData.userId}
                userAvatar={userData.userAvatar}
                className="Pets-petsListContainer"
                onClick={OnPetCardClicked}
                defaultSelect={defaulSelectPet}
                selectedPetId={selectedPetId}
              />
              {/* Total Pets */}
              <div className="flexRowCenter">
                <p className='paragraph2'>
                  {`Total: ${petProfiles.length} ${(petProfiles.length > 1) ? 'Pets' : 'Pet'}`}
                </p>
              </div>
            </section>

            {/* Members Section */}
            <section className="Pets-membersContainer">
              {/* Header - Members */}
              <div className="Pets-sectionHeaderContainer">
                <p className="heading2 Pets-sectionHeaderText">Members</p>
                <IconButton
                  className="flexRowCenter Pets-sectionHeaderIconButton"
                  icon={<FontAwesomeIcon icon={faPlusCircle} />}
                />
              </div>
            </section>
          </div>
          {/* Pet Profile Details */}
          {(selectedPet) && 
            <>
              <div className='Pets-contentColumn2'>
                <div className='Pets-sectionHeaderContainer'>
                  {/* Pet Name */}
                  <p className='heading2'>{selectedPet.name}</p>
                  <IconButton
                        className="flexRowCenter Pets-sectionHeaderIconButton"
                        icon={<FontAwesomeIcon icon={faPenToSquare} />}
                        onClick={()=>{}}
                  />
                </div>
                <div className='flexColumnCenter Pets-contentContainer'>
                  {/* Pet Avatar Placeholder*/}
                  <div className='Pets-petAvatarPlaceholder flexColumnCenter'>
                    <FontAwesomeIcon icon={faPaw}/>
                  </div>
                  {/* Pet Brief Information Section */}
                  <section className='Pets-petDescriptionHeader flexColumnCenter'>
                    <p className='heading4'>{selectedPet.breed}</p>
                    <p className='paragraph2'>{selectedPet.type}</p>
                    <p className='paragraph2'>({selectedPet.weight} lbs)</p>
                  </section>
                  {/* Pet Information Section */}
                  <section className='Pets-petInformationContainer'>
                    {/* Pet About Card */}
                    <IconCard className='Pets-petAboutCard' 
                              icon={faNoteSticky}>
                      <p className='paragraph2'>About</p>
                      <div className='Pets-petAboutContainer'>
                        <p className='paragraph2'>“{selectedPet.about}”</p>
                      </div>
                    </IconCard>
                    {/* Pet Address Card */}
                    <IconCard icon={faLocationDot} 
                              layout={['ColumnCenter']}
                              className='Pets-petInformationIconCard'>
                      <p className='paragraph2'>{selectedPet.physicalAddress1} {(selectedPet.physicalAddress2) ? ',' : ''} {selectedPet.physicalAddress2}</p>
                      <p className='paragraph2'>{selectedPet.addressCity}, {selectedPet.addressState}, {selectedPet.addressZip5} {(selectedPet.addressZip4) ? '-': ''} {selectedPet.addressZip4}</p>
                    </IconCard>
                    {/* Pet Birthday Card */}
                    <IconCard icon={faGift} 
                              layout={['ColumnCenter']}
                              className='Pets-petInformationIconCard'>
                      <p className='paragraph2'>{Converters.FormatDateConverter(selectedPet.dateOfBirth)}</p>
                      <p className='paragraph2'>{selectedPet.age} years old</p>
                    </IconCard>
                    {/* Pet Add More Information Button Card */}
                    <IconCard 
                      icon={faSquarePlus} 
                      layout={['ColumnCenter']}
                      type='action' 
                      className='Pets-petInformationIconCard'>
                      <p className='paragraph2'>Add More Pet Information</p>
                    </IconCard>
                  </section>
                </div>
              </div>
            </>
          }
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