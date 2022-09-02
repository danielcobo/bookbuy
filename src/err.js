import chalk from 'chalk';
import hasFlag from 'has-flag';

/**
 * Handle errors gracefully
 * @param {Error} e error event object
 * @param {string} description user-friendly error message
 * @param {boolean} debug true to show error stack
 */
export default function err(e, description, debug) {
  if (hasFlag('--debug')) {
    console.log(chalk.red(description));
    console.log(e.stack);
  } else {
    console.log(chalk.red(`Error: ${description}`));
  }

  process.exit(1);
}
