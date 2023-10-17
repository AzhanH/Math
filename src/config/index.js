import images from '../assets/images';
import {colors} from '../utils/theme';

export const classes = [
  {
    id: 1,
    playerId: 1234,
    name: 'Steve Smith',
    grade: 'Middle (Grade 6-8)',
    image: images.childImage1,
    color: colors.darkPeach,
    gender: 'Female',
    email: 'Email@info.com',
    PhoneNo: '+866-876463',
    SchoolName: 'ABC School',
    Dob: 'june 3, 1995',
  },
  {
    id: 2,
    playerId: 1234,
    name: 'Sasha Rose',
    grade: 'Middle (Grade 6-8)',
    image: images.childImage2,
    color: colors.yellow,
    gender: 'Female',
    email: 'Email@info.com',
    PhoneNo: '+866-876463',
    SchoolName: 'ABC School',
    Dob: 'june 3, 1995',
  },
  {
    id: 3,
    playerId: 1234,
    name: 'Julia Carter',
    grade: 'Middle (Grade 6-8)',
    image: images.childImage3,
    color: colors.green,
    gender: 'Female',
    email: 'Email@info.com',
    PhoneNo: '+866-876463',
    SchoolName: 'ABC School',
    Dob: 'june 3, 1995',
  },
  {
    id: 4,
    playerId: 1234,
    name: 'James Dean',
    grade: 'Middle (Grade 6-8)',
    image: images.childImage4,
    color: colors.sky,
    gender: 'Female',
    email: 'Email@info.com',
    PhoneNo: '+866-876463',
    SchoolName: 'ABC School',
    Dob: 'june 3, 1995',
  },
];

export const subscriptionLogs = [
  {
    id: 1,
    purchaseDate: '29 Sept,2021',
    expiryDate: '29 Sept,2021',
    color: 'orange',
  },
  {
    id: 2,
    purchaseDate: '29 Sept,2021',
    expiryDate: '29 Sept,2021',
    color: 'blue',
  },
];
export const contests = [
  {
    id: 1,
    color: 'orange',
    name: 'ABC Contest',
    date: 'May 5 ,2022',
    time: '5:00PM',
    status: 'Active',
    image: images.contestPlayer,
  },
  {
    id: 2,
    color: 'red',
    name: 'ABC Contest',
    date: 'May 5 ,2022',
    time: '5:00PM',
    status: 'Active',
    image: images.contestPlayer,
  },
  {
    id: 3,
    color: 'red',
    name: 'ABC Contest',
    date: 'May 5 ,2022',
    time: '5:00PM',
    status: 'Active',
    image: images.contestPlayer,
  },

  {
    id: 4,
    color: 'green',
    name: 'ABC Contest',
    date: 'May 5 ,2022',
    time: '5:00PM',
    image: images.contestPlayer,
    status: 'Inactive',
  },
];

export const inviteParents = [
  {
    id: 1,
    image: images.childImage1,
    color: 'darkOrange',
    name: 'STEVE SMITH',
    grade: 'Middle (Grade 6-8)',
  },
  {
    id: 2,
    image: images.childImage2,
    color: 'yellow',
    name: 'SASHA ROSE',
    grade: 'Middle (Grade 6-8)',
    showCheck: true,
  },
  {
    id: 3,
    image: images.childImage3,
    color: 'green',
    name: 'JULIA CARTER',
    grade: 'Middle (Grade 6-8)',
  },
  {
    id: 4,
    image: images.childImage3,
    color: 'darkBlue',
    name: 'JULIA CARTER',
    grade: 'Middle (Grade 6-8)',
  },
];
export const myTeams = [
  {
    id: 1,
    name: 'The Gladiators',
    image: images.childImage1,
    color: colors.darkPeach,
  },
  {
    id: 2,
    name: 'ABC Team',
    image: images.childImage2,
    color: colors.yellow,
  },
  {
    id: 3,
    name: 'XYZ Team',
    image: images.childImage3,
    color: colors.green,
  },
];

function removeLeadingZeroAndDecimal(numberString) {
  return numberString.replace(/^0+(\.\d+)?$/, (match, group) =>
    group ? group : '0',
  );
}

// function removeLeadingZeroAndDecimal(numberString) {
//   return numberString.replace(/^0+(\.\d+)?$/, (match, group) => group ? group.substring(1) : '0');
// }

export const scoreBoardButtonList = [
  {id: 6, name: 'PRIVATE SCOREBOARD', to: 'Levels', params: 'private'},
  {id: 1, name: 'CLASSROOM LEVEL', to: 'Levels', params: 'class'},
  {id: 2, name: 'SCHOOL LEVEL', to: 'Levels', params: 'school'},
  {id: 3, name: 'STATE LEVEL', to: 'Levels', params: 'state'},
  {id: 4, name: 'NATIONAL MATHBEE®', to: 'Levels', params: 'national'},
  {id: 5, name: 'INTERNATONAL MATHBEE®', to: 'Levels', params: 'international'},
];

export const options = [
  {label: 'Level of play', placeholder: 'Select Level of Play'},
  {label: 'Mode', placeholder: 'Select Mode'},
  {label: 'Grade', placeholder: 'Select Grade'},
  {label: 'State', placeholder: 'Select State'},
  {label: 'Country', placeholder: 'Select Country'},
  {label: 'Team Type', placeholder: 'Select Team Type'},
];

export const levels = [
  {
    id: 1,
    teamType: 'Multi-Player',
    name: 'Hello Kitty',
    score: removeLeadingZeroAndDecimal('0.89'),
    decimalText: 'View Full Decimal',
    state: 'PA',
    country: 'USA',
    schoolName: 'West Brook',
  },
  {
    id: 2,
    teamType: 'Single-Player',
    name: 'Blue Cats',
    score: removeLeadingZeroAndDecimal('0.875'),
    decimalText: 'View Full Decimal',
    state: 'TX',
    country: 'USA',
    schoolName: 'Cedar Crest',
  },
  {
    id: 3,
    teamType: 'Multi-Player',
    name: 'Jaguar',
    score: removeLeadingZeroAndDecimal('0.866'),
    decimalText: 'View Full Decimal',
    state: 'TX',
    country: 'USA',
    schoolName: 'Homeschool',
  },
  {
    id: 4,
    teamType: 'Single-Player',
    name: 'Pink Panthers',
    score: removeLeadingZeroAndDecimal('0.789'),
    decimalText: 'View Full Decimal',
    state: 'FL',
    country: 'USA',
    schoolName: 'EastonSchool',
  },
  {
    id: 5,
    teamType: 'Multi-Player',
    name: 'Jets',
    score: removeLeadingZeroAndDecimal('0.89'),
    decimalText: 'View Full Decimal',
    state: 'PA',
    country: 'USA',
    schoolName: 'Broadbeck',
  },
  {
    teamType: 'Single-Player',
    id: 6,
    name: 'Orioles',
    score: removeLeadingZeroAndDecimal('0.89'),
    decimalText: 'View Full Decimal',
    state: 'PA',
    country: 'USA',
    schoolName: 'CamdSchool',
  },
];
export const addSuffixToWord = position => {
  if (position > 3 && position < 21) {
    return position + 'th';
  }
  switch (position % 10) {
    case 1:
      return position + 'st';
    case 2:
      return position + 'nd';
    case 3:
      return position + 'rd';
    default:
      return position + 'th';
  }
};

export const notifications = [
  {
    id: 1,
    desc: 'Lorem ipsum dolor sit amet, consectetur elit t Aenean euismod bibendum Proin book.',
    date: '12/15/2022',
    time: '00:00 PM',
    isSeen: false,
  },
  {
    id: 2,
    desc: 'Lorem ipsum dolor sit amet, consectetur elit t Aenean euismod bibendum Proin book.',
    date: '12/15/2022',
    time: '00:00 PM',
    isSeen: false,
  },
  {
    id: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur elit t Aenean euismod bibendum Proin book.',
    date: '12/15/2022',
    time: '00:00 PM',
    isSeen: true,
  },
  {
    id: 4,
    desc: 'Lorem ipsum dolor sit amet, consectetur elit t Aenean euismod bibendum Proin book.',
    date: '12/15/2022',
    time: '00:00 PM',
    isSeen: true,
  },
  {
    id: 5,
    desc: 'Lorem ipsum dolor sit amet, consectetur elit t Aenean euismod bibendum Proin book.',
    date: '12/15/2022',
    time: '00:00 PM',
    isSeen: true,
  },
];

export const playData = [
  {
    name: 'Classroom',
    value: 'classrome',
  },
  {
    name: 'School',
    value: 'school',
  },
  {
    name: 'National',
    value: 'national',
  },
  {
    name: 'International',
    value: 'international',
  },
];

export const modeData = [
  {
    name: 'Addition',
    value: 'addition',
  },
  {
    name: 'Subtraction',
    value: 'subtraction',
  },
  {
    name: 'Division',
    value: 'division',
  },
  {
    name: 'Multiplication',
    value: 'multiplication',
  },
];

export const gradeData = [
  {name: '1st grade', value: 1},
  {name: '2nd grade', value: 2},
  {name: '3rd grade', value: 3},
];

export const stateData = [
  {name: 'AB', value: 1},
  {name: 'CD', value: 2},
];
export const countryData = [
  {name: 'AB', value: 1},
  {name: 'CD', value: 2},
  {name: 'EF', value: 3},
];
export const teamData = [
  {name: 'Single', value: 0},
  {name: 'Multiplay', value: 1},
];

export const privacyText =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit \n amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.';
