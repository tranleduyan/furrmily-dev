/* Avatar Icons */
import { faFishFins, faHippo, faOtter, 
    faCow, faDog, faFeather, faFish, 
    faDragon, faKiwiBird, faWorm, faShrimp, 
    faHorseHead, faHorse, faFrog, faFeatherPointed, 
    faDove, faCrow, faCat, faUser } from '@fortawesome/free-solid-svg-icons'

/* Text Converter */
const UpperCaseConverter = (str) => {
    return str.toUpperCase();
};

const LowerCaseConverter = (str) => {
    return str.toLowerCase();
};

const CapitalConverter = (str) => {
    // Check if the input is not a string or is an empty string
    if (typeof str !== "string" || str.length === 0) {
        // Return the input unchanged
        return str;
    }
    let retStr = LowerCaseConverter(str);
    // Split the string into an array of words
    const words = retStr.split(" ");
    // Capitalize the first letter of the first word if it's not a number
    if (words[0] && isNaN(words[0])) {
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }
    // Capitalize the first letter of each word after a space
    for (let i = 1; i < words.length; i++) {
        if (!isNaN(words[i])) {
        continue; // Skip numbers
        }
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    // Join the words back into a string
    return words.join(" ");
};

const DateTimeConverter = (str) => {
    return new Date(str);
}

const DateTimeStringConverter = (year, month, day, hour = 0, minute = 0, xm = 'AM') => {

    let convertedHour = parseInt(hour, 10);

    //Convert to 24Hour format
    if(xm === 'PM' && convertedHour !== 12){
        convertedHour += 12;
    }
    else if(xm === 'AM' && convertedHour === 12){
        convertedHour = 0;
    }

    //Set it to be in format of 00 - 2 digits format for date conversion
    const formattedHour = convertedHour.toString().padStart(2,'0');
    const formattedMinute = minute.toString().padStart(2,'0');
    const formattedDay = day.toString().padStart(2, '0');
    const formattedMonth = month.toString().padStart(2, '0');

    //Return date convertable string
    return `${year}-${formattedMonth}-${formattedDay}T${formattedHour}:${formattedMinute}:00.000Z`;
}

const TimeStampConverter = (timeStamp) => {
    const date = new Date(timeStamp);
    
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    const year = date.getUTCFullYear();

    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2,'0');

    const period = hours < 12 ? 'AM' : 'PM';

    const hours12 = hours % 12;

    const formattedHours = (hours12 === 0 && period === 'PM') ? '12' : hours12;

    const formattedHoursString = formattedHours.toString().padStart(2, '0');

    return `${month}/${day}/${year} @ ${formattedHoursString}:${minutes} ${period}`;
}

const FormatDateConverter = (timeStamp) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(timeStamp);

    const day = date.getDate();
    let daySuffix = 'th';
    if(day === 1 || day === 21 || day === 31){
        daySuffix = 'st';
    }
    else if(day === 2 || day === 22){
        daySuffix = 'nd';
    }
    else if(day === 3 || day === 23){
        daySuffix = 'rd';
    }

    return `${months[date.getMonth()]} ${day}${daySuffix}, ${date.getFullYear()}`;
}

export const Converters = {
    UpperCaseConverter,
    LowerCaseConverter,
    CapitalConverter,
    DateTimeConverter,
    DateTimeStringConverter,
    TimeStampConverter,
    FormatDateConverter,
}

/* Helpers */

/* Return the user avatar icon based on the stored string */
const GetAvatarIcon = (avatarName) => {
  switch(avatarName){
      case 'faFishFins':
          return faFishFins;
      case 'faHippo':
          return faHippo;
      case 'faDog':
          return faDog;
      case 'faCow':
          return faCow;
      case 'faFeather':
          return faFeather;
      case 'faFish':
          return faFish;
      case 'faDragon':
          return faDragon;
      case 'faKiwiBird':
          return faKiwiBird;
      case 'faWorm':
          return faWorm;
      case 'faShrimp':
          return faShrimp;
      case 'faHorseHead':
          return faHorseHead;
      case 'faHorse':
          return faHorse;
      case 'faFrog':
          return faFrog;
      case 'faFeatherPointed':
          return faFeatherPointed;
      case 'faDove':
          return faDove;
      case 'faCrow':
          return faCrow;
      case 'faCat':
          return faCat;
      case 'faOtter':
          return faOtter;
      default:
          return faUser;
  };
};

const IsValidDate = (month, day, year) => {
    if((!month || !day || !year) || (month === '2' && day > '29')){
        return false;
    }

    else if(month === '2' && day === '29'){
        return IsLeapYear(year);
    }
    
    else if(day === '31'){
        if(month === '1' || month === '3' || month === '5' 
        || month === '7' || month === '8' || month === '10' || month === '12'){
            return false;
        }
    }
    return true;
};

const IsLeapYear = (year) => {
    if (((0 === year % 4) && (0 !== year % 100)) || (0 === year % 400)) {
        return true;
    } 
    return false;
}

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

export const Helpers = {
    GetAvatarIcon,
    IsValidDate,
    IsLeapYear,
    CalculateAge,
}

