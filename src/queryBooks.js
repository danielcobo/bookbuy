// Stryker disable all
/* istanbul ignore file */
/**
 * Query DOM for books
 * @returns {string[]} list of books
 */
export default function queryBooks() {
  const baseURL = window.location.href.split('/').slice(0, 3).join('/');

  return [...document.querySelectorAll('.answerWrapper')].map(function (div) {
    return div.querySelector('img').getAttribute('alt');
  });
}
