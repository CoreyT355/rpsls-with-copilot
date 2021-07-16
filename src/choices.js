export const choices = [
  {
    name: 'rock',
    losesAgainst: ['paper', 'spock'],
    winsAgainst: ['lizard', 'scissors']
  }, {
    name: 'paper',
    losesAgainst: ['lizard', 'scissors'],
    winsAgainst: ['rock', 'spock']
  }, {
    name: 'scissors',
    losesAgainst: ['rock', 'spock'],
    winsAgainst: ['paper', 'lizard']
  }, {
    name: 'lizard',
    losesAgainst: ['scissors', 'rock'],
    winsAgainst: ['paper', 'spock']
  }, {
    name: 'spock',
    losesAgainst: ['lizard', 'paper'],
    winsAgainst: ['scissors', 'rock']
  }
];
