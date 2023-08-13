//#region Import Components
import React, { useState, useEffect }from 'react'
import PetCard from '../../PetCard/PetCard'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { API } from '../../../Global/Constants';
//#endregion

//#region Import Stylings
import '../../../Styles/Components/Lists/PetsList/PetsList.css'
//#endregion

function PetsList(props) {

  //#region Variables

  /* API */
  const apiURL = `${API.petsListURL}${props.userId}`
  const apiKey = API.key;

  /* Data for Pets List */
  const [petsListData, setPetsListData] = useState([]);

  /* Message to display in Pets List */
  const [message, setMessage] = useState('');

  //#endregion

  //#region Functions
  
  useEffect(()=>{
    /* Get Method */
    axios
      .get(apiURL, {
        headers: {
          'X-API-KEY': apiKey
        }
      })
      .then(response => {
        /* If success, set message to empty */
        if(response.status === 200){

          /* Stringify Response to parse for setting data for Pets List*/
          const JSONFormat = JSON.stringify(response.data.responseObject);
          setPetsListData(JSON.parse(JSONFormat));
          setMessage('');
        }
      })
      
      /* Set error to the message */
      .catch(error => {
        setMessage(error.response.data.message);
      })
  }, [apiURL, apiKey]);

  /* Calculate Age using date of birth object passed in */
  const CalculateAge = (dob) => {
    
    /* Convert 'dob' to Date */
    const birthDate = new Date(dob);

    /* Get today's Date */
    const today = new Date();

    /* Calculate age by difference between today's year and birth year */
    let age = today.getFullYear() - birthDate.getFullYear();

    /* To calculate if there is a birthday */
    const monthDifference = today.getMonth() - birthDate.getMonth();

    /* If month difference less than 0 or if in the birthday month but have not the birth date yet, then no birthday this year, minus age by 1 */
    if(monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())){
      age--;
    }
    return age;
  }

  //#endregion

  const className= ` petsList-Container ${props.className}`;
  return (
    <SimpleBar className={className}>
      {petsListData.length === 0 ? (
          <p className='petsList-Message paragraph2'>{message}</p>
        ) : (
          petsListData.map(pet => (
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
  userData: state.user.userData,
});

export default connect(mapStateToProps)(PetsList)