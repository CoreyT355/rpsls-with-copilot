import chalk from 'chalk';
import prompt from 'prompt';
import { determineWinner, pickRandomChoice } from './utils.js';
import { choices } from "./choices.js";

const log = console.log;
const computerChoice = pickRandomChoice(choices);

log(chalk.green('Welcome to Rock, Paper, Scissors, Lizard, Spock!'));
log(chalk.green('Please choose your weapon:'));
log(chalk.green('1. Rock'));
log(chalk.green('2. Paper'));
log(chalk.green('3. Scissors'));
log(chalk.green('4. Lizard'));
log(chalk.green('5. Spock'));

// I added the "choiceSchema", Copilot autocompleted the rest of the schema (including this comment)
const choiceSchema = {
  properties: {
    choice: {
      description: 'Choose your weapon',
      type: 'string',
      required: true,
      pattern: /^[1-5]$/,
    },
  },
};

// prompt user for a choice
prompt.start();
prompt.message = '> ';
prompt.delimiter = ' ';
prompt.colors = true;
prompt.get(choiceSchema, (err, result) => {
  const choice = result.choice;
  const winner = determineWinner(choices[choice - 1], computerChoice);

  log(chalk.green(`You chose ${choices[choice - 1].name}`));
  log(chalk.green(`The computer chose ${computerChoice.name}`));
  log(chalk.green(`${winner}`));
});
