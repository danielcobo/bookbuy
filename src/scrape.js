import puppeteer from 'puppeteer';

/**
 * Scrape the URL with the given DOM query function
 * @param {string} url website to scrape
 * @param {function} query DOM query function
 * @returns {Promise} query function result
 */
export default async function scrape(url, query) {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });

    const genres = await page.evaluate(query);

    return genres;
  } finally {
    await browser.close();
  }
}
