#!/usr/bin/env node
import progress from './progress.js';
import err from './err.js';
import scrape from './scrape.js';
import queryGenres from './queryGenres.js';
import askForGenre from './askForGenre.js';
import queryBooks from './queryBooks.js';
import checkout from './checkout.js';

progress('Loading genres..');
const genres = await scrape(
  'https://www.goodreads.com/choiceawards/best-books-2020',
  queryGenres
).catch((e) => err(e, "Couldn't load genres."));

const genre = await askForGenre(genres).catch((e) =>
  err(e, 'Could not choose genre.')
);

progress('Selecting a good book for you...');
const books = await scrape(genre.link, queryBooks).catch((e) =>
  err(e, 'Could not select a book.')
);
const random = Math.floor(Math.random() * books.length);
const book = books[random];

progress(`Book selected: ${book}`);
await checkout(book);
