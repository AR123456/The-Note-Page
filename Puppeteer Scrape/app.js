// to save to a file need to use the built in file system
const fs = require("fs");

const puppeteer = require("puppeteer");

// everything in an async function
async function run() {
  // tell puppeteer to launch the browser
  const browser = await puppeteer.launch();
  // access a page with the newPage method
  const page = await browser.newPage();
  // then the page to go to
  await page.goto("https://www.traversymedia.com");
  // *****take a screen shot of the page
  // await page.screenshot({ path: "example.png", fullPage: true });
  //***** */ making a pdf
  // await page.pdf({ path: "example.pdf", format: "A4" });
  // *****access dom elements ect
  // ******get all the HTML of the whole site  and console.log
  // const html = await page.content();
  // ******to get elements use page.evaluate which is a higher order function
  // const title = await page.evaluate(() => document.title);
  //*** */ get the text of the site
  // const text = await page.evaluate(() => document.body.innerText);
  // ******all the links - query selector all node list - create a shallow copy of an array from the node list
  // const links = await page.evaluate(() =>
  // array. from takes in a second arg that is a function  from the element e get the href
  //   Array.from(document.querySelectorAll("a"), (e) => e.href)
  // );
  // *******all the courses need to be more specific can still use query selector all node list
  const courses = await page.evaluate(() =>
    // array. from takes in a second arg that is a function
    // need to look a the structure of the site to know how to target what is listing courses
    //  csourses>card>
    Array.from(document.querySelectorAll("#cscourses .card"), (e) => ({
      // return this object of card-body>h3
      title: e.querySelector(".card-body h3").innerText,
      // card-body>level
      level: e.querySelector(".card-body .level").innerText,
      // link .card-footer>
      url: e.querySelector(".card-footer a").href,
    }))
  );
  console.log(courses);
  // *************************** another syntax can be used
  // short cut with $$ do not need Array.from and querySelectorAll just what is being targeted
  const courses2 = await page.$$eval("#cscourses .card", (elements) =>
    elements.map((e) => ({
      // return this object of card-body>h3
      title: e.querySelector(".card-body h3").innerText,
      // card-body>level
      level: e.querySelector(".card-body .level").innerText,
      // link .card-footer>
      url: e.querySelector(".card-footer a").href,
    }))
  );
  console.log(courses2);
  // ********************saving to a file
  // bring in fs and use json stringify to make proper json - err in call back
  fs.writeFile("courses.json", JSON.stringify(courses), (err) => {
    if (err) throw err;
    console.log("file saved");
  });
  // close the browser
  await browser.close();
}
run();
