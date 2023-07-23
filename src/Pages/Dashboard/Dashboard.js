/* Components */
import React from 'react'
import IconButton from '../../Components/Buttons/IconButton'
import SideNavBar from '../../Components/NavBars/SideNavBar/SideNavBar'
import LinkButton from '../../Components/Buttons/LinkButton'
import PomPlaceholderImage from '../../Images/Placeholders/Pom_PetPlaceholder.jpg'
import BanhPlaceholderImage from '../../Images/Placeholders/Banh_PetPlaceholder.jpg'

/* Stylings */
import '../../Styles/Pages/DashboardPage/Dashboard.css'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronRight, faFishFins, faKiwiBird } from '@fortawesome/free-solid-svg-icons'

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
                    <img src={PomPlaceholderImage} alt='Pet Avatar' className='Dashboard-petAvatar'/>
                    <div className='Dashboard-petInformationContainer'>
                      <h2 className='heading2'>Pom</h2>
                      <p className='paragraph2'>Age: 2 years old</p>
                      <p className='paragraph2'>Breed: Pomeranian</p>
                    </div>
                    <div className='Dashboard-petMemberContainer'>
                      <div className='Dashboard-petMemberList'>
                        <div className='flexColumnCenter Dashboard-petMemberCard'>
                          <FontAwesomeIcon icon={faKiwiBird}/>
                        </div>
                        <div className='flexColumnCenter Dashboard-petMemberCard'>
                          <FontAwesomeIcon icon={faFishFins}/>
                        </div>
                        <div className='flexColumnCenter Dashboard-lastPetMemberCard'>
                          <h4 className='heading4'>+3</h4>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='Dashboard-petCard'>
                    <img src={BanhPlaceholderImage} alt='Pet Avatar' className='Dashboard-petAvatar'/>
                    <div className='Dashboard-petInformationContainer'>
                      <h2 className='heading2'>Banh</h2>
                      <p className='paragraph2'>Age: 2 years old</p>
                      <p className='paragraph2'>Breed: Winter White Hamster</p>
                    </div>
                    <div className='Dashboard-petMemberContainer'>
                      <div className='Dashboard-petMemberList'>
                        <div className='flexColumnCenter Dashboard-petMemberCard'>
                          <FontAwesomeIcon icon={faKiwiBird}/>
                        </div>
                        <div className='flexColumnCenter Dashboard-petMemberCard'>
                          <FontAwesomeIcon icon={faFishFins}/>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className='flexRowCenter'>
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