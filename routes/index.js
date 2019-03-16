const routes = require("express").Router();

const PQueue = require("p-queue");
// create a new queue, and pass how many you want to scrape at once
const queue = new PQueue({ concurrency: 1 });

// our scraper function lives outside route to keep things clean
// the dummy function returns the title of provided url
const scrape = require('../scraper');

async function queueScraper(url) {
  return queue.add(() => scrape(url));
}

routes.post("/", async (req, res) => {
  const result = await queueScraper(req.body.url);
  res.status(200).json(result);
});

module.exports = routes;
