// Stryker disable all
/* istanbul ignore file */
/**
 * Genre object
 * @typedef {Object} Genre
 * @property {string} name name of genre
 * @property {string} value link to goodreads selection for genre in 2020
 */

/**
 * Query DOM for genres
 * @returns {Genre[]} sorted list of genres
 */
export default function queryGenres() {
  const baseURL = window.location.href.split('/').slice(0, 3).join('/');
  return [...document.querySelectorAll('.category__copy')]
    .map(function (h4) {
      return {
        value: baseURL + h4.parentNode.getAttribute('href'),
        name: h4.innerText,
      };
    })
    .sort();
}
