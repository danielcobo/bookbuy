import scrape from './scrape.js';
import queryBooks from './queryBooks.js';

test('Scrape books', async function () {
  const books = await scrape(
    'https://www.goodreads.com/choiceawards/best-fiction-books-2020',
    queryBooks
  );
  expect(/.+ by .+/.test(books[0])).toBeTruthy();
});
