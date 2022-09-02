import scrape from './scrape.js';

test('Scrape', async function () {
  const google = await scrape('https://www.google.com/', () => document.title);
  expect(google).toStrictEqual('Google');
});
