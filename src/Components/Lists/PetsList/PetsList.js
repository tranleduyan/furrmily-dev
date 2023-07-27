/* Components */
import React, { useState, useEffect }from 'react'
import PetCard from '../../PetCard/PetCard'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import axios from 'axios';
import { connect } from 'react-redux';

/* Stylings */
import '../../../Styles/Components/Lists/PetsList/PetsList.css'

function PetsList(props) {

  const [petsListData, setPetsListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
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
      {isLoading ? (
        <p>Loading...</p>
        ) :
        (petsListData.map(pet => (
          <PetCard
            key={pet.ppId}
            petAvatar={pet.photo}
            petName={pet.petName}
            petAge={CalculateAge(pet.petDateOfBirth)}
            petType={pet.petType}
            petBreed={pet.petBreed}
            ownerAvatar={props.userData.userAvatar}
          />
          ))
        )
      }
    </SimpleBar>
  )
}

const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps)(PetsList)