/**
 * @name Amazon search
 *
 * @desc Looks for a "nyan cat pullover" on amazon.com, goes two page two clicks the third one.
 */
const puppeteer = require("puppeteer");

try {
  (async () => {
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto("https://duckduckgo.com/", { waitUntil: "networkidle2" });
    await page.type("#search_form_input_homepage", "Puppeteer");
    const searchValue = await page.$eval(
      "#search_form_input_homepage",
      (el) => el.value
    );
    console.log(searchValue);

    await browser.close();
  })();
} catch (err) {
  console.error(err);
}
