/* Components */
import React from 'react'
import PetCard from '../../PetCard/PetCard'
import PomPlaceholderImage from '../../../Images/Placeholders/Pom_PetPlaceholder.jpg'
import BanhPlaceholderImage from '../../../Images/Placeholders/Banh_PetPlaceholder.jpg'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

/* Stylings */
import '../../../Styles/Components/Lists/PetsList/PetsList.css'

/* Icons */
import { faFishFins, faKiwiBird } from '@fortawesome/free-solid-svg-icons'

function PetsList(props) {
    const className= ` petsListContainer ${props.className}`;
  return (
    <SimpleBar className={className}>
            <PetCard petAvatar={PomPlaceholderImage} 
                     petName={'Pom'} 
                     petAge={'2'} 
                     petType={'Dog'}
                     petBreed={'Pomeranian'} 
                     member1Avatar={faKiwiBird} 
                     member2Avatar={faFishFins} 
                     extraMemberAmount={'3'}/>
            <PetCard petAvatar={BanhPlaceholderImage}
                     petName={'Banh'}
                     petAge={'2'}
                     petType={'Hamster'}
                     petBreed={'Winter White'}
                     member1Avatar={faKiwiBird}
                     member2Avatar={faFishFins}
                     extraMemberAmount={'0'}/>
            <PetCard petAvatar={''}
                     petName={'Chip'}
                     petAge={'2'}
                     petType={'Dog'}
                     petBreed={'Cavalier King Charles Spaniel'}
                     member1Avatar={faKiwiBird}
                     member2Avatar={faFishFins}
                     extraMemberAmount={'0'}/>
    </SimpleBar>
  )
}

export default PetsList