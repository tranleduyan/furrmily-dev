/* Components */
import React, { useState, useEffect }from 'react'
import PetCard from '../../PetCard/PetCard'
import PomPlaceholderImage from '../../../Images/Placeholders/Pom_PetPlaceholder.jpg'
import BanhPlaceholderImage from '../../../Images/Placeholders/Banh_PetPlaceholder.jpg'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import axios from 'axios';

/* Stylings */
import '../../../Styles/Components/Lists/PetsList/PetsList.css'

/* Icons */
import { faFishFins, faKiwiBird } from '@fortawesome/free-solid-svg-icons'

function PetsList(props) {

  const [petsListData, setPetsListData] = useState([]);

  const apiURL = `/api/pet-profiles/${props.userId}`
  const apiKey = 'ht8xjWktCv3ocTpjSYjkm3FCBotdJI7s60h6VS8i';

  useEffect(()=>{
    axios
      .get(apiURL, {
        headers: {
          'X-API-KEY': apiKey
        }
      })
      .then(response => {
        if(response.status === 200){
          const JSONFormat = JSON.stringify(response.data.responseObject);
          setPetsListData(JSON.parse(JSONFormat));
          console.log(response.data.responseObject);

        }
        else{
          console.log(response.status);
        }
      })
      .catch(error => {
        console.error('Error fetching pet profiles:', error);
      })
  }, [apiURL, apiKey]);

  useEffect(()=>{
    console.log(petsListData);
  },[petsListData]);

  const CalculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if(monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())){
      age--;
    }
    return age;
  }

  const className= ` petsListContainer ${props.className}`;
  return (
    <SimpleBar className={className}>
      {petsListData.map(pet => (
          <PetCard
            key={pet.ppId}
            petAvatar={pet.photo}
            petName={pet.petName}
            petAge={CalculateAge(pet.petDateOfBirth)}
            petType={pet.petType}
            petBreed={pet.petBreed}
            member1Avatar={faKiwiBird}
            member2Avatar={faFishFins}
            extraMemberAmount={3}
          />))}
      {/* 
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
  */}
    </SimpleBar>
  )
}

export default PetsList