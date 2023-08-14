
//API Information
export const API = {
  key: 'ht8xjWktCv3ocTpjSYjkm3FCBotdJI7s60h6VS8i',
  signInURL: '/api/authentication/sign-in',
  signUpURL: '/api/authentication/sign-up',
  petsListURL: '/api/pet-profiles/', //this one will be used to concat with userID
  petTypesURL:'/api/pet-profiles/pet-types',
  petBreedsURL:'/api/pet-profiles/pet-breed',
  addPetURL: '/api/pet-profiles/create',
}

//UI CONSTANTS
export const UITEXT = {
    GOOD_MORNING_TEXT: 'Good morning,',
    GOOD_AFTERNOON_TEXT: 'Good afternoon,',
    GOOD_EVENING_TEXT: 'Good evening,',
    GOOD_NIGHT_TEXT: 'Good night,',
    
    /* ERROR MESSAGES */
    EMPTY_FIELD_ERROR: 'Please fill in all required fields',
    GENERAL_ERROR: 'An error occurred while processing',
    INVALID_NAME_ERROR: 'Please enter valid name',
    INVALID_USERNAME_ERROR: 'Please enter valid username',
    PASSWORD_SHORT_ERROR: 'Password requires 6+ characters',
    PASSWORD_SPACE_ERROR: 'Password must not have spaces',
    PASSWORD_MISMATCHED_ERROR: 'The Passwords do not match',
    INVALID_EMAIL_ADDRESS_ERROR: 'Please enter valid email address',
    EMAIL_MISMATCHED_ERROR: 'The emails do not match',
    INVALID_PHONE_NUMBER_ERROR: 'Please enter valid phone number',
};


// DATA OBJECT
 const DATA = {
    DATE: [],
    MONTH: [],
    YEAR: [],
    GENDER: ['M', 'F'],
    STATE: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE',
            'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
            'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
            'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY',
            'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 
            'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV',
            'WI', 'WY'],
}

for(let date = 1; date <= 31; date++){
    DATA.DATE.push(date.toString());
}

for(let month = 1; month <= 12; month++){
    DATA.MONTH.push(month.toString());
}

const currentYear = new Date().getFullYear();
for(let year = currentYear; year > currentYear - 50; year--){
    DATA.YEAR.push(year.toString());
}

const dateOptions = DATA.DATE.map(date => ({
    value: date,
    label: date,
  }));

const monthOptions = DATA.MONTH.map(month => ({
    value: month,
    label: month,
  }));

const yearOptions = DATA.YEAR.map(year => ({
    value: year,
    label: year,
  }));

const genderOptions = DATA.GENDER.map(gender => ({
    value: gender,
    label: gender,
  }));
  
  const stateOptions = DATA.STATE.map(state => ({
    value: state,
    label: state,
  }));


//DATA FOR OPTIONS 
export const OPTIONS_DATA = {
    dateOptions,
    monthOptions,
    yearOptions,
    genderOptions,
    stateOptions,
}

