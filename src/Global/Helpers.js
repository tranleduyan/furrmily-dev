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

export const Converters = {
    UpperCaseConverter,
    LowerCaseConverter,
    CapitalConverter,
    DateTimeConverter,
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
  }
}

export const Helpers = {
    GetAvatarIcon,
}

