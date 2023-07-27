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
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const Converters = {
    UpperCaseConverter,
    LowerCaseConverter,
    CapitalConverter,
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

