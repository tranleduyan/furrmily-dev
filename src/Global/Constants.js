
//API Information
export const API = {
  key: 'ht8xjWktCv3ocTpjSYjkm3FCBotdJI7s60h6VS8i',
  signInURL: '/api/authentication/sign-in',
  signUpURL: '/api/authentication/sign-up',
  petsListURL: '/api/pet-profiles/', //this one will be used to concat with userId
  petTypesURL:'/api/pet-profiles/pet-types',
  petBreedsURL:'/api/pet-profiles/pet-breed',
  addPetURL: '/api/pet-profiles/create',
  getUserTasksListURL: '/api/users/tasks/', //this one will be used to concat with userId
  createTaskURL: '/api/tasks/create',
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
    LONG_PETNAME_ERROR: 'Pet name can only be 15 characters or less',
    INVALID_WEIGHT_ERROR: 'Please enter valid weight',
    INVALID_ZIPCODE5_ERROR: 'Please enter valid Zip Code 5',
    LONG_TASKNAME_ERROR: 'Task name can only be 30 characters or less',
    INVALID_DATE_OF_BIRTH: 'Please enter valid date of birth',
    INVALID_DATE: 'Please enter valid date',
    LONG_PET_DESCRIPTION_ERROR: 'Pet description can only be 160 characters or less',

};


// DATA OBJECT
 const DATA = {
    DATE: [],
    MONTH: [],
    YEAR: [],
    MINUTE: [],
    HOUR: [],
    XM: ["AM", "PM"],
    TASKSTATUS: ["In-progress","Complete"],
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

for(let minute = 0; minute <= 60; minute++){
  let minuteString = ""
  if(minute < 10){
    minuteString = "0"
  }
  minuteString += minute.toString();
  DATA.MINUTE.push(minuteString);
}

for(let hour = 0; hour <= 12; hour++){
  let hourString = ""
  if(hour < 10){
    hourString = "0"
  }
  hourString += hour.toString();
  DATA.HOUR.push(hourString);
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

const minuteOptions = DATA.MINUTE.map(minute => ({
    value: minute,
    label: minute,
  }));

const hourOptions = DATA.HOUR.map(hour => ({
    value: hour,
    label: hour,
  }));

const xmOptions = DATA.XM.map(xm => ({
    value: xm,
    label: xm,
  }));

const taskStatusOptions = DATA.TASKSTATUS.map(taskStatus => ({
    value: taskStatus === "In-progress" ? "IP" : "C",
    label: taskStatus,
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
    minuteOptions,
    hourOptions,
    xmOptions,
    taskStatusOptions,
    genderOptions,
    stateOptions,
}

