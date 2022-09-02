// Stryker disable all
import puppeteer from 'puppeteer';

/**
 * Go to Amazon checkout with specified book
 * @param {string} book book title and author
 * @param {function} test checkout page DOM query function (for testing)
 * @returns {any} will return void or result of test function
 */
export default async function goToCheckout(book, test) {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null, //same dimensions as browser
  });

  try {
    const [page] = await browser.pages(); //Use existing tab

    //Alternative to page.type - save 1 pageload step
    const URLquery = encodeURIComponent(book + ' paperback'); //Audio books can have buy button missing due to "free" promo
    await page.goto('https://www.amazon.com/s?k=' + URLquery, {
      waitUntil: 'domcontentloaded',
    });

    await Promise.all([
      page.click('.s-result-item h2 a'),
      page.waitForNavigation(),
    ]);

    await Promise.all([
      page.click('#buy-now-button'),
      page.waitForNavigation(),
    ]);

    if (test) {
      const result = await page.evaluate(test);
      await browser.close();
      return result;
    }
  } catch (err) {
    await browser.close();
    throw err;
  }
}
