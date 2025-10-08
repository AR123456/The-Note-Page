const puppeteer = require("puppeteer");

// everything in an async function
async function run() {
  // tell puppeteer to launch the browser
  const browser = await puppeteer.launch();
  // access a page with the newPage method
  const page = await browser.newPage();
  // then the page to go to
  await page.goto("https://www.traversymedia.com");
  // take a screen shot of the page
  await page.screenshot({ path: "example.png", fullPage: true });
  // making a pdf
  await page.pdf({ path: "example.pdf", format: "A4" });
  // access dom elements ect

  // close the browser
  await browser.close();
}
run();
