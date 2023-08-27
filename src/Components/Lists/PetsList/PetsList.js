//#region Import Components
import React, { useState, useEffect }from 'react';
import { useDispatch } from 'react-redux';
import { setPetProfilesData } from '../../../storage';
import PetCard from '../../PetCard/PetCard';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import axios from 'axios';
import { API } from '../../../Global/Constants';
//#endregion

//#region Import Stylings
import '../../../Styles/Components/Lists/PetsList/PetsList.css'
//#endregion

function PetsList(props) {

  //#region Component Usages
  
  const dispatch = useDispatch();

  //#endregion

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
          dispatch(setPetProfilesData(JSON.parse(JSONFormat)));
          setMessage('');
        }
      })
      
      /* Set error to the message */
      .catch(error => {
        setMessage(error.response.data.message);
      })
  }, [apiURL, apiKey]);

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
            id={pet.ppId}
            name={pet.petName}
            avatar={pet.photo}
            dateOfBirth={pet.petDateOfBirth}
            type={pet.petType}
            breed={pet.petBreed}
            gender={pet.petGender}
            weight={pet.petWeight}
            physicalAddress1={pet.physicalAddress1}
            physicalAddress2={pet.physicalAddress2}
            addressCity={pet.addressCity}
            addressState={pet.addressState}
            addressZip4={pet.addressZip4}
            addressZip5={pet.addressZip5}
            about={pet.description}
            profileMembers={pet.petProfileMembers}
            ownerAvatar={props.userAvatar}
            selectedPetId={props.selectedPetId}
            onClick={props.onClick}
          />
          ))
        )
      }
    </SimpleBar>
  )
}

PetsList.defaultProps = {
  selectedPetId: null,
};

export default (PetsList)