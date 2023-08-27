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
import { faPlusCircle, faPaw, faNoteSticky, faLocationDot, faGift, faPenToSquare, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import IconCard from '../../Components/Cards/IconCard/IconCard'
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
                  className="flexRowCenter Pets-sectionHeaderIconButton"
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
          <div className='Pets-contentColumn2'>
            <div className='Pets-sectionHeaderContainer'>
              <p className='heading2'>Pom</p>
              <IconButton
                    className="flexRowCenter Pets-sectionHeaderIconButton"
                    icon={<FontAwesomeIcon icon={faPenToSquare} />}
                    onClick={()=>{}}
              />
            </div>
            <div className='flexColumnCenter Pets-contentContainer'>
              <div className='Pets-petAvatarPlaceholder flexColumnCenter'>
                <FontAwesomeIcon icon={faPaw}/>
              </div>
              <section className='Pets-petDescriptionHeader flexColumnCenter'>
                <p className='heading4'>Pomeranian</p>
                <p className='paragraph2'>Dog</p>
                <p className='paragraph2'>(15 lbs)</p>
              </section>
              <section className='Pets-petInformationContainer'>
                <IconCard className='Pets-petAboutCard' 
                          icon={faNoteSticky}>
                  <p className='paragraph2'>About</p>
                  <div className='Pets-petAboutContainer'>
                    <p className='paragraph2'>“I'm a radiant ball of fluff, a Pomeranian with a coat as bright as the sun. Yup, that's right, I've got this striking yellow fur that gets everyone's attention. I must say, it suits my lively and vibrant personality pretty well.
Speaking of favorite things, have you met my besties? There’s Lucas, the dog toy.”</p>
                  </div>
                </IconCard>
                <IconCard icon={faLocationDot} 
                          layout={['ColumnCenter']}
                          className='Pets-petInformationIconCard'>
                  <p className='paragraph2'>680 W 118th Plz</p>
                  <p className='paragraph2'>Seattle, WA, 98178</p>
                </IconCard>
                <IconCard icon={faGift} 
                          layout={['ColumnCenter']}
                          className='Pets-petInformationIconCard'>
                  <p className='paragraph2'>February 25th, 2021</p>
                  <p className='paragraph2'>2 years old</p>
                </IconCard>
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