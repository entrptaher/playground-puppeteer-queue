const puppeteer = require('puppeteer');

// a dummy scraper function
// launches a browser and gets title
async function scrape(url){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const title = await page.title();
  await browser.close();
  return title
}

module.exports = scrape;