import scrape from './scrape.js';
import queryGenres from './queryGenres.js';

test('Scrape genres', async function () {
  const genres = await scrape(
    'https://www.goodreads.com/choiceawards/best-books-2020',
    queryGenres
  );
  expect(Array.isArray(genres)).toBeTruthy();
  expect(
    genres.filter(
      (genre) => genre.name === 'Fiction' || genre.name === 'Nonfiction'
    ).length
  ).toBeGreaterThan(0);
});
