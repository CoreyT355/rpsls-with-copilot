import { determineWinner, pickRandomChoice } from './utils.js';
import { choices } from './choices.js';

// Test suite for utils.js
describe('utils.js', () => {
  // describe pickRandomChoice
  describe('pickRandomChoice', () => {
    it('should return a function', () => {
      expect(pickRandomChoice).toBeInstanceOf(Function);
    });

    it('should return a random choice', () => {
      const randomChoice = pickRandomChoice();
      expect(randomChoice).toEqual(expect.objectContaining({
        name: expect.any(String),
        losesAgainst: expect.any(Array),
        winsAgainst: expect.any(Array),
      }));
    });
  });

  // describe determineWinner
  describe('determineWinner', () => {
    let choice1;
    let choice2;
    let winner;

    // when choice1 is rock
    describe('when choice1 is rock', () => {
      beforeEach(() => {
        choice1 = choices[0];
      });
      
      describe('and choice2 is paper', () => {
        beforeEach(() => {
          choice2 = choices[1];
          winner = determineWinner(choice1, choice2);
        });

        it('should return paper', () => {
          expect(winner).toEqual('paper wins!');
        });
      });

      // and choice2 is scissors
      describe('and choice2 is scissors', () => {
        beforeEach(() => {
          choice2 = choices[2];
          winner = determineWinner(choice1, choice2);
        });

        it('should return rock', () => {
          expect(winner).toEqual('rock wins!');
        });
      });

      // and choice2 is rock
      describe('and choice2 is rock', () => {
        beforeEach(() => {
          choice2 = choices[0];
          winner = determineWinner(choice1, choice2);
        });

        it('should return rock', () => {
          expect(winner).toEqual('Draw!');
        });
      });
    });

    // when choice1 is spock
    describe('when choice1 is spock', () => {
      beforeEach(() => {
        choice1 = choices[4];
      });

      describe('and choice2 is paper', () => {
        beforeEach(() => {
          choice2 = choices[1];
          winner = determineWinner(choice1, choice2);
        });

        it('should return paper', () => {
          expect(winner).toEqual('paper wins!');
        });
      });

      // and choice2 is lizard
      describe('and choice2 is lizard', () => {
        beforeEach(() => {
          choice2 = choices[3];
          winner = determineWinner(choice1, choice2);
        });

        it('should return spock', () => {
          expect(winner).toEqual('lizard wins!');
        });
      });

      // and choice2 is rock
      describe('and choice2 is rock', () => {
        beforeEach(() => {
          choice2 = choices[0];
          winner = determineWinner(choice1, choice2);
        });

        it('should return spock', () => {
          expect(winner).toEqual('spock wins!');
        });
      });
    });
  });
});
