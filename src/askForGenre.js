import inquirer from 'inquirer';

/**
 * Selected genre object
 * @typedef {Object} SelectedGenre
 * @property {string} link selected genre url
 */

/**
 * Get genre from the user
 * @param {import('./queryGenres').Genre[]} genres list of genres
 * @returns {Promise<SelectedGenre>} user selected genre
 */
export default async function askForGenre(genres) {
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'link',
      message: 'Select genre:',
      choices: genres,
    },
  ]);
}
