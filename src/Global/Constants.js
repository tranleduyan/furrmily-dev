export const UITEXT = {
    SIGN_IN_TEXT: 'Sign in',
    OR_TEXT: 'Or',
    SIGN_UP_TEXT: 'Sign up',
    USERNAME_TEXT: 'Username',
    PASSWORD_TEXT: 'Password',
    FIRST_NAME_TEXT: 'First name',
    MIDDLE_NAME_TEXT: 'Middle name',
    OPTIONAL_TEXT: 'Optional',
    LAST_NAME_TEXT: 'Last name',
    CONFIRM_PASSWORD_TEXT: 'Confirm password',
    EMAIL_ADDRESS_TEXT: 'Email address',
    CONFIRM_EMAIL_ADDRESS_TEXT: 'Confirm email address',
    PHONE_NUMBER_TEXT: 'Phone number',
    CONTINUE_TEXT: 'Continue',
    ALREADY_HAVE_AN_ACCOUNT_TEXT: 'Already have an account',
    GOOD_MORNING_TEXT: 'Good morning,',
    GOOD_AFTERNOON_TEXT: 'Good afternoon,',
    GOOD_EVENING_TEXT: 'Good evening,',
    GOOD_NIGHT_TEXT: 'Good night,',
    DASHBOARD_TEXT: 'Dashboard',
    PETS_TEXT: 'Pets',
    TASKS_TEXT: 'Tasks',
    ACTIVITIES_TEXT: 'Activities',
    SIGN_OUT_TEXT: 'Sign out',
    SETTINGS_TEXT: 'Settings',
    SEE_MORE_TEXT: 'See more',
    FRIENDS_TEXT: 'Friends',
    DAILY_PROGRESS_TEXT: `Today's progress`,
    CLOSE_TEXT: `Close`,
    NAME_TEXT: `Name`,
    DOB_TEXT: `Date of Birth`,
    GENDER_TEXT: `Gender`,
    TYPE_TEXT: `Type`,
    BREED_TEXT: `Breed`,
    ABOUT_TEXT: `About`,
    WEIGHT_TEXT: `Weight`,
    ADDRESS_LINE_1_TEXT: `Address Line 1`,
    ADDRESS_LINE_2_TEXT: `Address Line 2`,
    CITY_TEXT: `City`,
    STATE_TEXT: `State`,
    ZIP_CODE_TEXT: `Zip Code`,
    ADD_TEXT: `Add`,
    CANCEL_TEXT: `Cancel`,

    
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

export const DATA = {
    DATE: [],
    MONTH: [],
    YEAR: [],
    GENDER: ['M', 'F'],
    STATE: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 
            'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV',
            'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN',
            'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
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
